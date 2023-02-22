const search=document.querySelector(".search-input")
const input=search.querySelector("input")
const list=search.querySelector(".autocom-box")
const icon=search.querySelector(".icon")
const weblink=search.querySelector("a")
let manikharniga;
    input.onkeyup=(event)=>{
		let inputdata=event.target.value
		let emptyarray=[]
		if(inputdata){
			emptyarray=suggestions.filter(function(data){
				return(data.toLocaleLowerCase().startsWith(inputdata.toLocaleLowerCase()))
				})
				emptyarray=emptyarray.map(function(data){
					return data=`<div class="ix"><div><li>${data}</li></div><div><i onClick="remove(event)" id="iconn">X</i></div></div>`
				})
				show(emptyarray)
				search.classList.add("active")
				let alllist=search.querySelectorAll("li")
				for(i=0;i<alllist.length;i++){
					alllist[i].setAttribute("onclick","poor(this)")
				}
				
			}
		        else if(!inputdata){
				search.classList.remove("active")
				}
			
			
		}
				icon.addEventListener("click",()=>{
			        manikharniga=`https://www.google.com/search?q=${val}`;
					weblink.setAttribute("href",manikharniga)
					weblink.click()
				})
				let val;
		function poor(element){
					 val=element.textContent
                    input.value=val					
				}
				
		function show(sha){
			let userdata;
			if(!sha.length){
			uservalue=input.value
			userdata=`<div><div><li>${data}</li></div><div><i onClick="remove(mani)" id="iconn">X</i></div>`
			}
			else{
				userdata=sha.join('')
			}
			list.innerHTML=userdata
			window.onkeyup=(event)=>{
	   if(event.key==="ArrowDown"){
		  list.classList.add("hover")
		   let alllist=search.querySelectorAll("li")
		  for(i=0;i<alllist.length;i++){
			  
			   alllist[i].classList.toggle("poornima")  		   
		  }
		 
	   }
	}
		}
		function remove(karnigha){
			karnigha.preventDefault()
			let exit=karnigha.target.parentNode.parentNode
			exit.remove()
		}
		
	
	
	