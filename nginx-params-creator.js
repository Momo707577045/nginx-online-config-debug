const params = {
  args: '参数',
  query_string: '请求参数',
  is_args: '参数判断',
  arg_PARAMETER: 'GET请求中变量名PARAMETER参数的值',
  request: '客户端请求',
  request_body: '客户端请求的报文体',
  request_body_file: '客户端请求的文件',
  request_filename: '请求文件路径',
  request_method: '请求的方法',
  request_uri: '请求的URI，带参数',
  remote_addr: '客户端IP地址',
  binary_remote_addr: '客户端地址的二进制表示',
  remote_port: '客户端端口号',
  remote_user: '客户端用户名',
  http_cookie: '客户端的cookie信息',
  http_user_agent: '客户端代理信息',
  scheme: '使用协议',
  server_addr: '服务器地址',
  server_port: '服务器端口号',
  server_protocol: '请求的协议版本',
  document_uri: '请求的URI',
  document_root: 'root路径',
  limit_rate: '速率的限制',
  nginx_version: 'nginx版本',
  pid: '主进程的进程ID',
  host: 'host 域名',
  content_type: '请求信息里的Content-Type字段',
  http_x_forwarded_for: '访问真实IP路径',
  content_length: 'Content-Length字段',
  http_HEADER: 'header中指定字段',
  http_referer: '引用地址',
  http_via: '最后一个访问服务器的IP地址',
}
console.log(Object.keys(params).map(key => `'${key} => 【$${key}】 => ${params[key]} \\n'`).join('\n'))