const express=require("express")

const App=express()
const PORT=process.env.PORT || 8000

App.listen(PORT,()=>{
    console.log(`Server running at PORT:${PORT}`);
})

App.listen()