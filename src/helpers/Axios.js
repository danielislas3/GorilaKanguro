const axios = require('axios');

const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwNmRmNDYwMmQyMDc3ZGZjNjRmZGQ1ODhhOWFjZGMwYWYwOTcxYTNlMTM3NjAzY2ZhZTQ5NjNmNmExOGY4ZTNhM2E2OTQ3ZmRiMWY3YzA1In0.eyJhdWQiOiIxIiwianRpIjoiZDA2ZGY0NjAyZDIwNzdkZmM2NGZkZDU4OGE5YWNkYzBhZjA5NzFhM2UxMzc2MDNjZmFlNDk2M2Y2YTE4ZjhlM2EzYTY5NDdmZGIxZjdjMDUiLCJpYXQiOjE1NzEzNDg0ODYsIm5iZiI6MTU3MTM0ODQ4NiwiZXhwIjoxNjAyOTcwODg2LCJzdWIiOiI1Iiwic2NvcGVzIjpbInJlc3Qtb3JkZXJzIl19.uvnRjDgwfZXYJH6WxoXp_CcpOpk8_XkRDRIA0AIEmVqNEbhemRkCSnM083iRJ69YDJKBpkxe4Ge7T7t4f6rO_vWCSRizdBAhffQfrDNU7-P5kr124pVUbp-2cpn1TVDbxdn6QqmFmFQXA2_GiORzp5s9hjtxpN5g3mVKJ1HzXelavlIM8bhM6E-FYq8CJ1qgUMdmvxdsCO3NSPVYWKZygRoQHmjAwbUhk7K5_X_7ZGYXCBQjNjciKSFdA7un9AZPwBTsC4V5wMEw71ktqYAOhXRogmR2mXK3cK4FcPajA_i84LfxLXTG8PH1ZRWZxoZC7uJnAtT5fdvZ16nK3DKXtfQSdI95DXgmSGycUro48x25pepf5P7EK_AbdRUuvIcrcDcGnb66JNw1mUCghCclD4yTx_TqkWkXJsuWTq21Wq7pDoB-7KefnP5SntDi6jUEqJNIT_kyBAeNrvA3zm718TLMXBNTO-iFZpHVvLfbdWABEasBUrLjQZO75lrANFOJR2PUFPbGlS2sq9435NOsCNF913o1Wjjqglsuai5elfD_iW7jmLpeQb10EFL4KgYkF7ODpzYywN5OuBD4dZC-hbMbddQ461rCuDiwH-iD7TZ8IMJUua2UdK3LmNzNPhYAGTxeSVLsNXukA8wzw3-0zv_RdXiUNO7EUvo4fLoLOTw'


axios.defaults.baseURL = 'https://dev.envioskanguro.com/api/v1/provider_services'
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;