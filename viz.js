function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "https://public.tableau.com/shared/8TY8FQ6SB?:display_count=no",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
            
            var viz = new tableau.Viz(containerDiv, url, options); 
}

window.onload = initViz;