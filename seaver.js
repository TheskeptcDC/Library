const express = require('express');
const joi = require('joi');


const app = express();
   	

app.get('/',(req,res)=>{
	res.send('hello n\ welcome to the Book Store!')
	console.log('index requested')
		
	});


//when a book needs updating 
app.post('/collections/collection/:book',(req,res)=>{
	res.send('book collections here ')
	//validate the req body using joi
	//defining schema ..
	const schema = {
		name: joi.String().min(3).max(30)
	};
	//we get the update infor from the request body
	const bookUpdate = {
		//id: req.body.id,
		name: req.body.name,
	};

	//validate the request bbody 
	const test = joi.Validate(bookUpdate,schema);
		if (test) {
			res.send('book updated');
		}else{
			res.send('sorry failed to update the book ');
		}
	book.push(bookUpdate);
	res.send('book update done')
	});

//when a book needs to be deleted 
app.get('/collections/collection/:book',(req,res)=>{
	res.send('book was deleted  ')
	
	});

//to add a new book 
app.post('/collections/collection/newbook',(req,res)=>{
	res.send('book collections here ')
	//validate the req body using joi
	//defining schema ..
	const schema = {
		name: joi.String().min(3).max(30)
	};
	//we get the update infor from the request body
	const bookUpdate = {
		//id: req.body.id,
		name: req.body.name,
	};

	//validate the request bbody 
	const test = joi.Validate(bookUpdate,schema);
		if (test) {
			res.send('book updated');
		}else{
			res.send('sorry failed to update the book ');
		}
	book.push(bookUpdate);
	res.send('book update done')
	});

//echo start liistening 
	app.listen(3000,()=> console.log('now listening ..'));