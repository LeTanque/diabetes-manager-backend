# Databetes v1.0.0

Databetes API docs

- [Bloodsugar](#bloodsugar)
	- [GET /api/bloodsugar/{id}](#get-/api/bloodsugar/{id})
	- [POST /api/bloodsugar](#post-/api/bloodsugar)
	- [DELETE /api/bloodsugar/:id](#delete-/api/bloodsugar/:id)
	
- [Insulin](#insulin)
	- [GET /api/insulin/{id}](#get-/api/insulin/{id})
	- [POST /api/insulin](#post-/api/insulin)
	- [DELETE /api/insulin/:id](#delete-/api/insulin/:id)
	
- [Root](#root)
	- [GET /api](#get-/api)
	
- [Users](#users)
	- [GET /api/users/{id}](#get-/api/users/{id})
	- [GET /api/users/mobile/{id}](#get-/api/users/mobile/{id})
	- [GET /api/users](#get-/api/users)
	- [POST /api/users](#post-/api/users)
	- [DELETE /api/users/:id](#delete-/api/users/:id)
	- [PUT /api/users/{id}](#put-/api/users/{id})
	


# Bloodsugar

## GET /api/bloodsugar/{id}



	GET /api/bloodsugar/:id


### Examples

Request

```
axios.get('/api/bloodsugar/{id}');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "timestamp": "2019-02-01T03:12:07Z",
           "value": 109,
           "below_threshold": null,
           "prediction": null,
           "user_id": 1
       }...
   ]
```
## POST /api/bloodsugar



	POST /api/bloodsugar


### Examples

Request

```
axios.post('/api/bloodsugar');
```

### Success Response

Response

```
    HTTP/1.1 201
{
       "message":"Thank you, bloodsugar data has been added" 
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"User does not exist"
}
```
## DELETE /api/bloodsugar/:id



	DELETE /api/bloodsugar/:id


### Examples

Request

```
axios.delete('/api/bloodsugar/{id}');
```

### Success Response

Response

```
    HTTP/1.1 200
{
       "message":"{1}, user has been deleted"
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"Sorry, user does not exist"
}
```
# Insulin

## GET /api/insulin/{id}



	GET /api/insulin/:id


### Examples

Request

```
axios.get('/api/insulin/{id}');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "timestamp": "2019-02-01T03:21:53Z",
           "amount": 15,
           "duration": null,
           "type": "slow acting",
           "brand": "Humalog",
           "user_id": 1
       }...
   ]
```
## POST /api/insulin



	POST /api/insulin


### Examples

Request

```
axios.post('/api/insulin');
```

### Success Response

Response

```
    HTTP/1.1 201
{
       "message":"Thank you, insulin data has been added" 
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"User does not exist"
}
```
## DELETE /api/insulin/:id



	DELETE /api/insulin/:id


### Examples

Request

```
axios.delete('/api/insulin/{id}');
```

### Success Response

Response

```
    HTTP/1.1 200
{
       "message":"{1}, user has been deleted"
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"Sorry, user does not exist"
}
```
# Root

## GET /api



	GET /api


### Examples

Request Structure

```
axios.get('/api');
```

### Success Response

Example:

```
[
    {
           "greeting": "Hello!"
       }...
   ]
```
# Users

## GET /api/users/{id}



	GET /api/users/:id


### Examples

Request

```
axios.get('/api/users/{id}');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "username": "Patient Zero",
           "bg_high": 7,
           "bg_low": 3,
           "bg_target_top": 7,
           "bg_target_bottom": 3,
           ...
       }
   ]
```
## GET /api/users/mobile/{id}



	GET /api/users/mobile/:id


### Examples

Request

```
axios.get('/api/users/mobile/{id}');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "username": "Patient Zero",
           "bg_high": 7,
           "bg_low": 3,
           "bg_target_top": 7,
           "bg_target_bottom": 3,
           "height": null,
           "weight": null,
           "birthdate": null,
           "diagnosis_date": null,
           "gender": null,
           "diabetes_type": null,
           "insulin": {
               "id": 1,
               "timestamp": "2019-02-01T03:10:45Z",
               "amount": 17,
               "duration": null,
               "type": "pill form",
               "brand": "Novolog",
               "user_id": 1
           }...,
           "bloodsugar": {
               "id": 1,
               "timestamp": "2019-02-01T03:21:53Z",
               "amount": 15,
               "duration": null,
               "type": "slow acting",
               "brand": "Humalog",
               "user_id": 1
           }...
       }
   ]
```
## GET /api/users



	GET /api/users


### Examples

Request

```
axios.get('/api/users');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "username": "Patient Zero",
           "bg_high": 7,
           "bg_low": 3,
           "bg_target_top": 7,
           "bg_target_bottom": 3,
           "height": null,
           "weight": null,
           "birthdate": null,
           "diagnosis_date": null,
           "gender": null,
           "diabetes_type": null,
       },
       {
           "id": 2,
           "username": "Patient One",
           "bg_high": 6,
           "bg_low": 4,
           "bg_target_top": 7,
           "bg_target_bottom": 3,
           "height": null,
           "weight": null,
           "birthdate": null,
           "diagnosis_date": null,
           "gender": null,
           "diabetes_type": null
       }
   ]
```
## POST /api/users



	POST /api/users


### Examples

Request

```
axios.post('/api/users');
```

### Success Response

Response

```
    HTTP/1.1 201
{
       "message":"Thank you, user has been added"
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"Username exists, please choose another"
}
```
## DELETE /api/users/:id



	DELETE /api/users/:id


### Examples

Request

```
axios.delete('/api/users/{id}');
```

### Success Response

Response

```
    HTTP/1.1 200
{
       "message":"{1}, user has been deleted"
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"Sorry, user does not exist"
}
```
## PUT /api/users/{id}



	UPDATE /api/users/{id}


### Examples

Request

```
axios.update('/api/users/{id}');
```

### Success Response

Response

```
    HTTP/1.1 200
{
       "message":"user has been updated"
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"Sorry, user does not exist"
}
```
Response

```
HTTP/1.1 400
{
    "message":"Please include a user id to update"
}
```

