const XLSX = require('xlsx')
// import {data} from "./data.js"

const data = [
    {
      "username": "fw17_1030",
      "name": "Varsha Dhingra",
      "updated_at": "2022-04-18T15:54:33Z",
      "submission_link": "https://lovely-trifle-cb126e.netlify.app",
      "id": 1269597,
      "score": 8
    },
    {
      "username": "fw18_0255",
      "name": "Lokendra Singh",
      "updated_at": "2022-04-18T14:03:52Z",
      "submission_link": "",
      "id": 1269606,
      "score": 0
    },
    {
      "username": "fw18_0172",
      "name": "Yogesh Jagtap",
      "updated_at": "2022-04-18T15:24:47Z",
      "submission_link": "https://cool-palmier-da4a55.netlify.app/",
      "id": 1269607,
      "score": 6.5
    },
    {
      "username": "fw18_0739",
      "name": "Raushan Kumar",
      "updated_at": "2022-04-18T16:24:01Z",
      "submission_link": "https://euphonious-figolla-5d1e42.netlify.app/",
      "id": 1269614,
      "score": 7.5
    },
    {
      "username": "fw18_0686",
      "name": "Arpit Kumar Sahu",
      "updated_at": "2022-04-18T15:35:38Z",
      "submission_link": "https://verdant-bonbon-0569ad.netlify.app/",
      "id": 1269615,
      "score": 5
    },
    {
      "username": "fw18_1099",
      "name": "Yogesh Saini",
      "updated_at": "2022-04-18T15:10:17Z",
      "submission_link": "https://sunny-shortbread-b9bb82.netlify.app",
      "id": 1269617,
      "score": 8
    },
    {
      "username": "fp03_253",
      "name": "Mehtab Khan",
      "updated_at": "2022-04-18T17:09:32Z",
      "submission_link": "file:///C:/Users/MEHTAB%20KHAN/Downloads/WEB-18%20U2C2_620484/index.html",
      "id": 1269626,
      "score": 1
    },
    {
      "username": "fw18_0527",
      "name": "Vishal Umrao",
      "updated_at": "2022-04-18T16:21:54Z",
      "submission_link": "https://famous-twilight-616d21.netlify.app/",
      "id": 1269627,
      "score": 6.5
    },
    {
      "username": "fw17_0459",
      "name": "Sufi Nourin Zamal",
      "updated_at": "2022-04-18T15:43:29Z",
      "submission_link": "https://magenta-biscuit-474770.netlify.app",
      "id": 1269628,
      "score": 8
    },
    {
      "username": "fw17_0548",
      "name": "Bhawna Singh",
      "updated_at": "2022-04-18T16:39:42Z",
      "submission_link": "https://zippy-valkyrie-693ef3.netlify.app",
      "id": 1269632,
      "score": 8
    },
    {
      "username": "fw18_0281",
      "name": "Chandan Kumar",
      "updated_at": "2022-04-18T16:24:30Z",
      "submission_link": "https://friendly-kringle-cb3f25.netlify.app",
      "id": 1269633,
      "score": 7
    },
    {
      "username": "fw17_0227",
      "name": "Pintu Kumar",
      "updated_at": "2022-04-18T15:29:58Z",
      "submission_link": "https://spontaneous-pika-3b759a.netlify.app/",
      "id": 1269636,
      "score": 7.5
    },
    {
      "username": "fw18_0140",
      "name": "Sabira Farooq",
      "updated_at": "2022-04-18T16:07:10Z",
      "submission_link": "https://bejewelled-cranachan-342443.netlify.app/",
      "id": 1269641,
      "score": 8
    },
    {
      "username": "fw18_0918",
      "name": "Nagesh Dilip Salgude",
      "updated_at": "2022-04-18T15:37:38Z",
      "submission_link": "https://peppy-pastelito-f20a64.netlify.app/",
      "id": 1269642,
      "score": 8
    },
    {
      "username": "fw18_0821",
      "name": "Debasis Tripathy",
      "updated_at": "2022-04-18T16:36:04Z",
      "submission_link": "https://euphonious-panda-b82fd5.netlify.app",
      "id": 1269644,
      "score": 7
    },
    {
      "username": "fw17_0188",
      "name": "Shivaji Pandurang Jadhav",
      "updated_at": "2022-04-18T16:01:20Z",
      "submission_link": "https://melodious-peony-adb16e.netlify.app/",
      "id": 1269653,
      "score": 7.5
    },
    {
      "username": "fw18_0757",
      "name": "Prem Kumar",
      "updated_at": "2022-04-18T15:12:24Z",
      "submission_link": "https://sparkly-dolphin-32b416.netlify.app/",
      "id": 1269659,
      "score": 8
    },
    {
      "username": "fw18_0565",
      "name": "Shashwat Srivastava",
      "updated_at": "2022-04-18T16:04:42Z",
      "submission_link": "https://legendary-scone-103135.netlify.app/",
      "id": 1269667,
      "score": 5
    },
    {
      "username": "fw18_0472",
      "name": "Vikas Kumar",
      "updated_at": "2022-04-18T16:36:22Z",
      "submission_link": "https://sprightly-cendol-88b681.netlify.app/",
      "id": 1269668,
      "score": 4.5
    },
    {
      "username": "fw18_0315",
      "name": "Rajkumar Ramadalat Vishwakarma",
      "updated_at": "2022-04-18T16:30:25Z",
      "submission_link": "https://dainty-alpaca-f83f65.netlify.app/",
      "id": 1269670,
      "score": 7.5
    },
    {
      "username": "fp02_073",
      "name": "Deep Raj Singh",
      "updated_at": "2022-04-18T15:17:26Z",
      "submission_link": "https://superlative-narwhal-408ec3.netlify.app/",
      "id": 1269671,
      "score": 1
    },
    {
      "username": "fw18_0305",
      "name": "Rajesh Biswas",
      "updated_at": "2022-04-18T15:30:54Z",
      "submission_link": "https://jolly-peony-5087a0.netlify.app/",
      "id": 1269680,
      "score": 8
    },
    {
      "username": "fw18_0523",
      "name": "Pankaj Kandpal",
      "updated_at": "2022-04-18T15:47:55Z",
      "submission_link": "https://astounding-bienenstitch-3ca8a1.netlify.app/",
      "id": 1269682,
      "score": 8
    },
    {
      "username": "fw18_0432",
      "name": "Sahil Lagad",
      "updated_at": "2022-04-18T16:06:42Z",
      "submission_link": "https://effortless-bienenstitch-6b6a35.netlify.app/",
      "id": 1269686,
      "score": 5.5
    },
    {
      "username": "fw18_0312",
      "name": "Aditi Anil Patil",
      "updated_at": "2022-04-18T16:05:23Z",
      "submission_link": "https://fanciful-semolina-84def0.netlify.app/",
      "id": 1269687,
      "score": 1
    },
    {
      "username": "fw18_0814",
      "name": "Kanad",
      "updated_at": "2022-04-18T16:04:41Z",
      "submission_link": "https://jovial-douhua-6fb598.netlify.app/",
      "id": 1269690,
      "score": 8
    },
    {
      "username": "fw18_0571",
      "name": "Harshal Nikhade",
      "updated_at": "2022-04-18T15:46:10Z",
      "submission_link": "https://exquisite-heliotrope-70f45b.netlify.app/",
      "id": 1269692,
      "score": 7
    },
    {
      "username": "fw18_0829",
      "name": "Waris Khan",
      "updated_at": "2022-04-18T16:06:15Z",
      "submission_link": "https://roaring-macaron-f3f5c6.netlify.app/",
      "id": 1269699,
      "score": 1
    },
    {
      "username": "fw18_0423",
      "name": "Sanket Paharia",
      "updated_at": "2022-04-18T16:18:48Z",
      "submission_link": "https://warm-arithmetic-40dc63.netlify.app/",
      "id": 1269700,
      "score": 6
    },
    {
      "username": "fp03_283",
      "name": "Suyasha Ratha",
      "updated_at": "2022-04-18T16:30:00Z",
      "submission_link": "https://funny-syrniki-e7742d.netlify.app/",
      "id": 1269702,
      "score": 8
    },
    {
      "username": "fw18_0297",
      "name": "Mohammad Osama",
      "updated_at": "2022-04-18T15:59:58Z",
      "submission_link": "https://zesty-parfait-eebd38.netlify.app/",
      "id": 1269711,
      "score": 7
    },
    {
      "username": "fw18_0160",
      "name": "Ashwini Radkar",
      "updated_at": "2022-04-18T15:41:25Z",
      "submission_link": "https://inspiring-kangaroo-477417.netlify.app/",
      "id": 1269721,
      "score": 6
    },
    {
      "username": "fw17_0896",
      "name": "Amit Jha",
      "updated_at": "2022-04-18T15:55:29Z",
      "submission_link": "https://gregarious-khapse-db67f6.netlify.app",
      "id": 1269725,
      "score": 8
    },
    {
      "username": "fp03_211",
      "name": "Lalit Sarjerao Pawar",
      "updated_at": "2022-04-18T16:29:11Z",
      "submission_link": "https://thriving-cupcake-57456c.netlify.app/",
      "id": 1269735,
      "score": 8
    },
    {
      "username": "fw17_0836",
      "name": "Md Ramiz Raja",
      "updated_at": "2022-04-18T16:09:30Z",
      "submission_link": "https://animated-kleicha-c2ac3d.netlify.app/",
      "id": 1269737,
      "score": 8
    },
    {
      "username": "fw18_0726",
      "name": "Abdul Quadir",
      "updated_at": "2022-04-18T15:59:42Z",
      "submission_link": "https://gorgeous-mousse-eaba39.netlify.app",
      "id": 1269738,
      "score": 5
    },
    {
      "username": "fw18_1137",
      "name": "Pratap Chandra Deo",
      "updated_at": "2022-04-18T16:37:37Z",
      "submission_link": "https://celadon-pika-d6ad58.netlify.app/",
      "id": 1269740,
      "score": 5
    },
    {
      "username": "fw17_0979",
      "name": "Ranjeet Sahoo",
      "updated_at": "2022-04-18T14:51:39Z",
      "submission_link": "https://cute-strudel-2b1dc6.netlify.app/",
      "id": 1269745,
      "score": 7
    },
    {
      "username": "fw17_0746",
      "name": "Chandan Sharma",
      "updated_at": "2022-04-18T16:14:25Z",
      "submission_link": "https://fantastic-dragon-70c254.netlify.app/",
      "id": 1269746,
      "score": 5
    },
    {
      "username": "fp03_052",
      "name": "Sonali Shirke",
      "updated_at": "2022-04-18T16:13:41Z",
      "submission_link": "https://deluxe-alpaca-bdca3b.netlify.app/",
      "id": 1269755,
      "score": 8
    },
    {
      "username": "fp03_195",
      "name": "Md Arif Ali",
      "updated_at": "2022-04-18T23:29:15Z",
      "submission_link": "https://gleeful-rolypoly-e45589.netlify.app/",
      "id": 1269756,
      "score": 6.5
    },
    {
      "username": "fw18_1101",
      "name": "Abhishek Sarkar",
      "updated_at": "2022-04-18T15:50:51Z",
      "submission_link": "https://lucky-pixie-7251ad.netlify.app/",
      "id": 1269763,
      "score": 8
    },
    {
      "username": "fp03_256",
      "name": "Uday Dinkar Patil",
      "updated_at": "2022-04-18T16:31:06Z",
      "submission_link": "https://storied-marzipan-df7341.netlify.app/",
      "id": 1269769,
      "score": 8
    },
    {
      "username": "fw17_0899",
      "name": "Rahbar Ahmad",
      "updated_at": "2022-04-18T15:48:23Z",
      "submission_link": "https://nimble-granita-a041ba.netlify.app/",
      "id": 1269771,
      "score": 3.5
    },
    {
      "username": "fp01_095",
      "name": "Nikhil Buwade",
      "updated_at": "2022-04-18T15:42:24Z",
      "submission_link": "https://grand-stardust-cd4aa0.netlify.app",
      "id": 1269773,
      "score": 7
    },
    {
      "username": "fp03_298",
      "name": "Umang Arora",
      "updated_at": "2022-04-18T15:54:01Z",
      "submission_link": "https://dazzling-sorbet-9b00c6.netlify.app/",
      "id": 1269775,
      "score": 7.5
    },
    {
      "username": "fw18_1008",
      "name": "Supriyo Samanta",
      "updated_at": "2022-04-18T16:35:25Z",
      "submission_link": "https://amazing-gumdrop-1f53bf.netlify.app/",
      "id": 1269776,
      "score": 7.5
    },
    {
      "username": "fw18_0192",
      "name": "Shubham Jawale",
      "updated_at": "2022-04-18T16:40:03Z",
      "submission_link": "https://thunderous-lamington-aa4008.netlify.app/",
      "id": 1269778,
      "score": 1
    },
    {
      "username": "fw16_670",
      "name": "Md Naiyer Ajam",
      "updated_at": "2022-04-18T16:22:18Z",
      "submission_link": "https://u2c2coding.netlify.app/",
      "id": 1269783,
      "score": 8
    },
    {
      "username": "fw17_0477",
      "name": "Vishal Gupta",
      "updated_at": "2022-04-18T16:33:49Z",
      "submission_link": "https://resilient-kitten-9c200c.netlify.app/",
      "id": 1269784,
      "score": 8
    },
    {
      "username": "fw17_0070",
      "name": "Mohd Hamja Khan",
      "updated_at": "2022-04-18T15:09:26Z",
      "submission_link": "https://precious-moxie-9ae980.netlify.app/",
      "id": 1269796,
      "score": 8
    },
    {
      "username": "fw17_1135",
      "name": "Faizan ahmad",
      "updated_at": "2022-04-18T16:23:12Z",
      "submission_link": "https://fascinating-duckanoo-81109d.netlify.app/",
      "id": 1269805,
      "score": 6
    },
    {
      "username": "fw18_0575",
      "name": "Suman Saurav",
      "updated_at": "2022-04-18T16:09:58Z",
      "submission_link": "https://sweet-cheesecake-65b984.netlify.app",
      "id": 1269822,
      "score": 2.5
    },
    {
      "username": "fw18_1039",
      "name": "Nagaraju G",
      "updated_at": "2022-04-18T16:38:20Z",
      "submission_link": "https://silly-swan-b53d20.netlify.app/",
      "id": 1269850,
      "score": 8
    },
    {
      "username": "fw18_0145",
      "name": "Tejas",
      "updated_at": "2022-04-18T16:26:47Z",
      "submission_link": "https://dulcet-nasturtium-3a2c68.netlify.app/",
      "id": 1269859,
      "score": 7.5
    }
  ]


const convertJsonToExcel = () => {

    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "web18")
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workBook, "EvaluationSheet.xlsx")

}
convertJsonToExcel()