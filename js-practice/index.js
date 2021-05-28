const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv");

const getText = () => {
  request(
    {
      url:
        "https://gvpl.ent.sirsidynix.net/client/en_US/default/search/detailnonmodal/ent:$002f$002fSD_ILS$002f0$002fSD_ILS:293701/ada?qf=LANGUAGE%09Language%09KOR%09Korean&qf=FORMAT%09Format%09BOOK%09Books&qf=ITEMCAT2%09Age+Level%091%3AADULT%09Adult&rw=108&d=ent%3A%2F%2FSD_ILS%2F0%2FSD_ILS%3A293701%7EILS%7E114&isd=true&h=8",
      methos: "GET",
    },
    (error, response, body) => {
      if (error) {
        console.error(error);
        return;
      }
      if (response.statusCode == 200) {
        console.log("OK");
        // console.log(body);
        // const bodyDecoded = iconv.decode(body, "en");

        const $ = cheerio.load(body);
        const listText = $("detail_biblio0").toArray();

        console.log(listText);
      }
    }
  );
};

getText();
