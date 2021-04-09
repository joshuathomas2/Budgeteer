const { ObjectId } = require('mongodb')

export const userData = [
   { 
	"_id": ObjectId("606ff5d5ce440946b42802ee"),
	 "email": "koltennay@gmail.com",
	 "username": "koltennay", 
	 "password_salt": "a2b2f987c08161d679e8b207bed26fac", 
	 "password_hash": "bb37c7b3985fe968029d90d1228fcbb00b6acb6d499d0ae59ad44dee4c69cd3565090b8f8db323ceedbdcf0b5e96c610e5d74ff7940f080d9e5b6be3984c4b376d3eb87d3fe446ca268254b59a84e6a0b2f797f46fda46e61210c32fb63f482dd3089c0f4e0cf9fabd3cddfc62d8262d4271f1070aeaf35c83022c09b1f0ffde", 
	 "daily_spending_limit": 25,
	 "created_date": new Date()
   }
]