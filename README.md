# mongodb + Nodejs
Use of Mongo Data Base with Nodejs in Express Framework. In this topic, I code the new updates to the latest version of MongoDB 8.6.3 with save() and find() queries

To Save Data in Mongo DB, the old way is deprecated now in the new version of MongoDB


collection.save(function (err,res){
if(err)throw error;
console.log(res);
conn.close(); 
});
}) // old way (deprecated)


employees.save()
.then(() => {
console.log("Document saved successfully");
})
.catch((err) => {
console.log("Document saved unsuccessfully");
});
conn.close();
});  // new way



To Find in Mongo DB, the old way is deprecated now in the new version of MongoDB

Model.find({},function(err,data){
if(err) throw error; 
console.log(data); 
conn.close(); 
}); // old way (deprecated)
 

Model.find()
.then(collection, () => {
console.log(collection);
})
.catch((err) => {
console.log(err);
}); // new way
