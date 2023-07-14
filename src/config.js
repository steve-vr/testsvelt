
const Configuration = ( ()=>{
    const dev={
        PAGE: "Babieca",
        URL_IMG:"https://d2zzz5z45zl95g.cloudfront.net/babieca",
        URL_IMG_GENERIC:"https://d2zzz5z45zl95g.cloudfront.net/generic_imgs",

        //URL_IMG_PAGE:,
        //GAMEAPI_URL:"https://apiuniversalsoft.com/api",
        //API:"https://lobby-bff.apiusoft.com",
        //CLIENT_AUTH:"GOLD21GOLDENBET4A19028GOLDENBET1",
        //CLIENT_CODE:"GOLD",
        //LOBBY_GAMES_API:"https://lobby.apiusoft.com",
        //WS_URL:"wss://lobby-bff-test.apiusoft.com/lobbybff",
        //org:"GB",
        //currency:9,//PEN
        //domain: "goldenbet.pe"
    }
    const local={
       PAGE: "Babieca",
        URL_IMG:"https://d2zzz5z45zl95g.cloudfront.net/babieca",
        URL_IMG_GENERIC:"https://d2zzz5z45zl95g.cloudfront.net/generic_imgs",
    }
    const prod={
       PAGE: "Babieca",
        URL_IMG:"https://d2zzz5z45zl95g.cloudfront.net/babieca",
        URL_IMG_GENERIC:"https://d2zzz5z45zl95g.cloudfront.net/generic_imgs",
    }

    const configMap=new Map()
    configMap.set("local",local)
    configMap.set("dev",dev)
    configMap.set("prod",prod)

    const getEnv=()=>{
        const host=window.location.toString()
        const env = host.indexOf('localhost')>0||host.indexOf("127.0.0.1")>0?'local':host.indexOf('dev')>0?'dev':'prod'
        return env;
    }


    const getConfiguration=()=>{
        const env = getEnv()
        console.log("You are in " + env);
        const config = configMap.get(env)
        return config
    }
    return {getConfiguration, getEnv}
}) (  )

export default Configuration