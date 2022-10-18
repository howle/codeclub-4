import { Router } from 'itty-router'


// Create a new router
const router = Router()


//fix favicon.ico dirty:
router.get("/favicon.ico", () => new Response('try path /secre', { status: 200 })); 

console.log('try /secre')

router.get("/", () => {
  return new Response('Level 1: Hack me :) (remember, we are all "=")')
    console.log('try /secre')

})


router.get("/secre", () => {
  return new Response("Level 2. - What is Blue + Yellow? append to /secret/ :) " );
  //return new Response(console.log(`try path /secre`))
})

router.get("/secret/green", () => {
  return new Response("Level 3. - What are two numbers that are equal to each other, when added create 10? (please  write LITERAL math expression after /quick/maffs/)" );
  //return new Response(console.log(`try path /secre`))
})

router.get("/quick/maffs/:text", ({ params }) => {
  // 5+5= expected 
    console.log("visit codeclub-4.trespass.io/(ADD KEY HERE)")

  let input = decodeURIComponent(params.text)

  // Construct a buffer from our input
  let buffer = Buffer.from(input, "utf8")

  // Serialise the buffer into a base64 string
  let base64 = buffer.toString("base64")
 

  //response.headers.append(‘Set-Cookie’, ‘visit:codeclub-4.trespass.io=true’);
  // Return the HTML with the string to the client
  return new Response(`<!DOCTYPE html> <p>Level 4. Visit the following path - if correct, you win. <code>${base64}</code></p>`, {
    headers: {
      "Content-Type": "text/html"
    }
  })
})

router.get("/NSs1PQ==", () => {
  //const ay = request.cf.useragent = 'try_key_for_path';
  return new Response(`<p>Truly 1337, great work. Hacker name unlocked, The Color of your shirt, and your private key. Feel free to email me your hacker name  @ king@mail.com ;)</p>`, {
    headers: {
      "Content-Type": "text/html",
 //     "Set-Cookie": "try_key_for_path=hehe"
    }
  })
  //return new Response(console.log(`try path /secre`))
})

/*
This route demonstrates path parameters, allowing you to extract fragments from the request
URL.

Try visit /example/hello and see the response.
*/




///
/*

router.get("/secret/green/:text", ({ params }) => {
  // Decode text like "Hello%20world" into "Hello world"
  let input = decodeURIComponent(params.text)

  // Construct a buffer from our input
  let buffer = Buffer.from(input, "utf8")

  // Serialise the buffer into a base64 string
  let base64 = buffer.toString("base64")

  // Return the HTML with the string to the client
  return new Response(`<p>Maybe this is right? Here is the key :) - Good luck: <code>${base64}</code></p>`, {
    headers: {
      "Content-Type": "text/html"
    }
  })
})

/*
///




This shows a different HTTP method, a POST.

Try send a POST request using curl or another tool.

Try the below curl command to send JSON:

$ curl -X POST <worker> -H "Content-Type: application/json" -d '{"abc": "def"}'
*/
router.post("/post", async request => {
  // Create a base object with some fields.
  let fields = {
    "ima ban u": request.cf.asn,
    "u 2": request.cf.colo
  }

  // If the POST data is JSON then attach it to our response.
  if (request.headers.post("Content-Type") === "application/json") {
    fields["json"] = await request.json()
  }

  // Serialise the JSON to a string.
  const returnData = JSON.stringify(fields, null, 2);

  return new Response(returnData, {
    headers: {
      "Content-Type": "application/json"
    }
  })
})

/*
This is the last route we define, it will match anything that hasn't hit a route we've defined
above, therefore it's useful as a 404 (and avoids us hitting worker exceptions, so make sure to include it!).

Visit any page that doesn't exist (e.g. /foobar) to see it in action.
*/
router.all("*", () => new Response("Not good enough, try harder!", { status: 444 }))

/*
This snippet ties our worker to the router we deifned above, all incoming requests
are passed to the router where your routes are called and the response is sent.
*/
addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})
