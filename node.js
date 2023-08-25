const fs = require('fs');
const http = require('http');
const spawn = require('child_process').spawn;

function getConf(locationConf) {
  return `
    server {
      listen 80;
      server_name nginx-test.luckly-mjw.cn;
      error_log  /var/log/nginx/error.log debug;
      access_log  /var/log/nginx/access.log  main;
      autoindex_localtime on;


      
      ${locationConf}

    }
  `;
}

http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Max-Age': '600',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  });

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      // 写入配置文件
      fs.writeFileSync('/etc/nginx/conf.d/default.conf', getConf(JSON.parse(body).conf));

      const nginxTest = spawn('nginx', ['-t']);
      let testResult = ''
      nginxTest.stderr.on('data', data => {
        testResult += data;
      });

      nginxTest.on('close', code => {
        if (code === 0) {
          spawn('nginx', ['-s', 'reload']);
          setTimeout(() => {
            fs.writeFileSync('/var/log/nginx/error.log', '');
            fs.writeFileSync('/var/log/nginx/access.log', '');
            res.end('ok');
          }, 200)
        } else {
          if (!testResult.toString().includes('syntax is ok')) {
            fs.writeFileSync('/etc/nginx/conf.d/default.conf', getConf('')); // 恢复默认设置
          }
          res.end(testResult);
        }
      });
    });
  } else {
    res.end('no support get');
  }
}).listen(11006);