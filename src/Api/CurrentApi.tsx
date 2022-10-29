import { type } from "@testing-library/user-event/dist/type";
import { WEATHER_URL,WEATHER_API_KEY } from "../Constants";

type Props = {
item:any,
}

class WeatherNowApi {
   async fetchDaily() {
    return new Promise(async (success,failure)=>{
        try{
            const response =await fetch(`${WEATHER_URL}${WEATHER_API_KEY}`);
            if (response.ok){
                const json = await response.json();
                const data = json.map(item => ({
                    temp:item.main.temp,
                    dt:item.dt,
                    date:item.dt_txt,
                    iconId:item.weather[0].id,
                    desc:item.weather[0].description
                }));
                success({response,data});
            }else{
                failure({error:'Invalid http request'});
                }
            }catch{

            }
        }
        
    )
   }
}