let request = require('request');
const {expect} = require('chai');
let url= "http://localhost:3000/api/cats"
let url1= "http://localhost:3000/api/cat"
let id;
let cat = { Title: "cat 10",
            Subtitle: "cat 10",
            Path: "kitten1.jpg",
            Description: "cat 8"
          }

// Test case for GET API
describe('test GET api', ()=>{
    it('extracting data from db', (done)=>{
        request(url, function(req,res){
            let cat_body= JSON.parse(res["body"]);
            expect(cat_body.data).to.be.a("array");
            expect(res.statusCode).to.eql(200);
            done();
        })
    })      
})
describe('POST cat image', ()=>{
    it('it should post cat-image with description details', (done)=>{
        request.post({url:url1, form:cat}, function(req,res){
            let cat_body = JSON.parse(res.body);
            expect(cat_body.message).to.contain("success");
            id = cat_body.data.insertedId;
            done();
        }
        )
   })
})
 describe('delete cat along with its id', ()=>{
     it('it should delete cat given the id', (done) => {
        request.delete(`${url1}/${id}`, function(req,res){
            let cat_body = JSON.parse(res.body);
            expect(cat_body.message). to. contain("delete success");
            expect(res.statusCode).to.eql(200);
            done();
        })
    })
 })