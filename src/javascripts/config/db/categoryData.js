const { ObjectId } = require('mongodb')

export const categoryData = [
    {
		"_id": ObjectId("606fe6bf73bc6527b06523f7"),
        "user_id": ObjectId("606ff5d5ce440946b42802ee"), 
		"name":  "Checking",
		"created_date": new Date(), 
		"modified_date": new Date()
    },
	{
		"_id": ObjectId("606fe6bf73bc6527b06523f8"),
        "user_id": ObjectId("606ff5d5ce440946b42802ee"), 
		"name":  "Savings",
		"created_date": new Date(), 
		"modified_date": new Date()
    },
	{
		"_id": ObjectId("606fe6bf73bc6527b06523f9"),
        "user_id": ObjectId("606ff5d5ce440946b42802ee"), 
		"name":  "House Mortgage",
		"created_date": new Date(), 
		"modified_date": new Date()
    },
	{
		"_id": ObjectId("606fe6bf73bc6527b06523fa"),
        "user_id": ObjectId("606ff5d5ce440946b42802ee"), 
		"name":  "Credit",
		"created_date": new Date(), 
		"modified_date": new Date()
    }
]

