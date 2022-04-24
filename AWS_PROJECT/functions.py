import boto3
from boto3.dynamodb.conditions import Key



###########DYNAMO_DB


#### To create table with id attribute 
def create_table(data):
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.create_table(
        TableName=data['table_name'],
        KeySchema=[
            {
                'AttributeName': 'id',
                'KeyType': 'HASH'
            },
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'id',
                'AttributeType': 'S'
            },
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1,
        }
    )

    print("Table status:", table.table_status)

#create_table()


###The function to get the record

def get_item(data):
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table(data['table_name'])      
    
    resp = table.get_item(
            Key={
                'id' : data['id'],
            }
        )
                
    if 'Item' in resp:
        print(resp['Item'])


#Function to insert a record

def insert_function(data):
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table(data['table_name']) 
    
    table.put_item(Item={
            'id': data['id'],
            'first_name': data['f_name'],
            'last_name': data['l_name'],
            'email': data['email']
        })


#UPDATE FIRST_NAME

def update_firstn_function(data):
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table(data['table_name'])
    
    table.update_item(
        Key={
                'id': data['id'],
            },
        UpdateExpression="set first_name = :f_name",
        ExpressionAttributeValues={
                ':f_name': data['f_name']
            },
        
        )


#UPDATE LASTNAME
def update_lastn_function(data):
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table(data['table_name'])
    
    table.update_item(
        Key={
                'id': data['id'],
            },
        UpdateExpression="set last_name = :l_name",
        ExpressionAttributeValues={
                ':l_name': data['l_name']
            },
        
        )

##DELETE A RECORD
def delete_func(data):
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table(data['table_name'])
    
    response = table.delete_item(
        Key={
            'id': data['id'],
        },
    )


#DELETE A TABLE

def deletee_table(data):
    x = boto3.client('dynamodb')


    resp = x.delete_table(
        TableName=data['table_name'],
    )


