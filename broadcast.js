module.exports = function({ api }) {
    return function() {
        switch (globalThis.Fca.Require.FastConfig.BroadCast) {
            case true: {
                BroadCast();
                return setInterval(() => { 
                    try {
                        BroadCast();
                    }
                    catch (e) {
                        console.log(e);
                    }
                },1800 * 1000);
            }
            case false: {
                break;
            }
            default: {
                break;
            }
        }
    }
}

/**
 * It fetches a JSON file from GitHub, parses it, and then logs a random string from the JSON file
 * @returns Nothing.
 */
function BroadCast() {
    try {
        var logger = globalThis.Fca.Require.logger;
            var Fetch = globalThis.Fca.Require.Fetch;
                Fetch.get("https://raw.githubusercontent.com/HarryWakazaki/Global-Horizon/main/FcaCast.json").then(async (/** @type {{ body: { toString: () => string; }; }} */ res) => {
                var random = JSON.parse(res.body.toString())[Math.floor(Math.random() * JSON.parse(res.body.toString()).length)] || "Ae Zui Zẻ Nhé !";
            logger.Normal(random);
        }); 
    }	
    catch (e) {
        console.log(e);
        return;
    }
}