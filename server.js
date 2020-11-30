const puppeteer = require("puppeteer");

// async function start(){
// 	const contenido = {}
// 	contenido.lista	= await EsperarPreguntas()
// 	const publicacion = await server.PublicarFacebook(contenido.lista)
// 	const hora = await server.hora()
// }

(async ()=>{
    try{
        const browser = await puppeteer.launch({headless:false,userDataDir: './puppeteer_data'});
        const page = await browser.newPage();
		page.goto('https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=PE&view_all_page_id=119114546599621')
		await page.waitForNavigation();
        console.log("init")
        var json = [];

		const title = await page.evaluate(() => {
			const titleMount = [...document.querySelectorAll("._99s9")].map((title)=>title.textContent);
            
            const post = [...document.querySelectorAll("._9cb_")].map((element)=>{
                const startDate = [...document.querySelectorAll("._99s9")].map((title)=>title.textContent);
                // element.click()
                return startDate;
            });
            // const links = [document.querySelectorAll(".mxm-items>article>div>h3>a")].map((links)=>links.href)
            var data = {
                titleMount:titleMount,
                post:post    
            }
            console.log(data)
            return data  

		});
		
        console.log(title)
        // await browser.close();
        return title
		}catch(e){
		//console.log(e);
		}
})();
