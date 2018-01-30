//check fxnavon

		function checkfxnavon(){
			var onvar=window.location.pathname;
			if(onvar.indexOf("index")!=-1)
　				{
		　		  $("#fxitem0").addClass("fxnavlion");
		　　		}
			else if(onvar.indexOf("prd")!=-1){
				 $("#fxitem1").addClass("fxnavlion");
			}
			else if(onvar.indexOf("sol")!=-1){
				 $("#fxitem2").addClass("fxnavlion");
			}			
			else if(onvar.indexOf("news")!=-1){
				 $("#fxitem3").addClass("fxnavlion");
			}				
			else if(onvar.indexOf("eb")!=-1){
				 $("#fxitem4").addClass("fxnavlion");
			}				
			else if(onvar.indexOf("social")!=-1){
				 $("#fxitem5").addClass("fxnavlion");
			}				
			else if(onvar.indexOf("contact")!=-1){
				 $("#fxitem6").addClass("fxnavlion");
			}				

		}

