Backend Architecture :

Routes:

http://18.209.48.64:5001/create_table : It accepts table_name in the form of {"table_name":"name_of_table"}


http://18.209.48.64:5001/insert_rec:It insert a record data can be given in the format 
{
            'id': "0",
            'f_name': "Divyansh",
            'l_name': "Singh",
            'email': "divyans@xyz.com",
             'table_name':"Divyansh"
        }


http://18.209.48.64:5001/update_f:It updates first name give the data in the format
{
            'id': "0",
            'f_name': "Divyanshu",
             'table_name':"Divyansh"
        }


http://18.209.48.64:5001/update_l:It updates last name give the data in the format
{
            'id': "0",
            'l_name': "Divyanshu",
             'table_name':"Divyansh"
        }

http://18.209.48.64:5001/del_rec:It delete a record give the data in the format
{
            'id': "0",
             'table_name':"Divyansh"
        }

http://18.209.48.64:5001/del_tab:It delete a table give the data in format
{
"table_name":"Divyansh
"}








Front End(Client) : There are six working functionalities Creating a table,Deleting a table,Inserting a record,Updating first name and last name

We will fill the appropriate details and output can be seen in aws instance.it is mapped to backend flask.





To run the app in your machine you have to install docker first
Then you need to pull two images which can be done by this two commands 
sudo docker pull divyansh25/reactd:v2
sudo docker pull divyansh25/flaskd
Then to make container out of it use sudo docker run -p 3000:3000 --name myreact divyansh25/reactd:v2 for react
and for flask use sudo docker run -e x='Enter access key' id -e y='Secret access key' -e z='region_name' -p 5001:5001 --name flask2 divyansh25/flaskd:v1

Your app will be running if you will fill the aws credentials in the last command!
