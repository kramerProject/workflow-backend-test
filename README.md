# Task:

Develop a REST API workflow.

# Requirements:

1. Insert a workflow on database and on a queue and respond request with the inserted workflow

```
request.body example:

{
	"status": "string",
	"data": "string",
  "steps": "string"
}

```
2. Update status from specific workflow
3. List all workflows
4. Consume a workflow from a queue and generate a PDF file with workflow.Data

Visualize jobs accessing /admin/queues.

# Technologies:

* Bull
* Express
* Javascript
* MySQL
* NodeJs
* Redis

# Get Started:

1. Clone the project

2. Install dependencies

```npm install
```
3. - Create a .env file in project's root

```
MYSQL_USER='your user bane'
MYSQL_PASSWORD='your password'
HOSTNAME=localhost
PORT=3001

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

```
4. Install redis

5. Create a database using MYSQL

```
DROP DATABASE IF EXISTS siena;
CREATE DATABASE IF NOT EXISTS siena;

USE siena;

CREATE TABLE IF NOT EXISTS workflow (
	id INT NOT NULL AUTO_INCREMENT,
    status VARCHAR(100) NOT NULL,
    data VARCHAR(100) NOT NULL,
    steps VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

```

6. Start redis

```
redis-server
```

7. Start server

```
npm start
```