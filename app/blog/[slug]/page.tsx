import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { posts } from '../page'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} | Hari Bhakti Farm`,
    description: post.excerpt,
  }
}

// Full article content keyed by slug
const articles: Record<string, { heading: string; body: string[] }[]> = {

  'rajsamand-lake-crown-jewel-rajasthan': [
    { heading: 'A Lake Born of Royal Vision', body: [
      'Rajsamand Lake, locally known as Rajsamand Dhundhar, was commissioned by Maharana Raj Singh I of Mewar in 1660 AD. The project took 10 years and reportedly employed over 60,000 workers. The result is one of the largest artificial lakes in India — stretching 6.5 km in length, 3 km in width, and holding up to 99 million cubic metres of water.',
      'The dam that created the lake, called Nauchowki, is lined with 25 carved marble slabs inscribed with the longest stone inscription in the world — the "Raj Prashasti" — a 1,017-couplet Sanskrit panegyric describing the lineage and achievements of the Sisodia rulers of Mewar.',
    ]},
    { heading: 'What to See at Rajsamand Lake', body: [
      'The Ghela River feeds the lake from the south. The lake is surrounded by low Aravalli hills and dotted with seasonal waterfowl. The Nauchowki Bund (dam) on the northern shore is flanked by 10 ornate cenotaphs (chhatris) and several ghats where locals gather at sunrise and sunset.',
      'The marble inscriptions at Nauchowki are a must-read if you have a guide who can translate from Sanskrit. Each panel tells a story of valour, administration, and devotion from the Mewar royal era.',
    ]},
    { heading: 'Getting There from Hari Bhakti Farm', body: [
      `The lake is just 8 km from our farm — roughly a 15-minute drive down the Kankroli road. The best time to visit is early morning (6–8 AM) when the light is golden and the lake's surface is mirror-calm, or late afternoon (4–6 PM) for a spectacular sunset behind the Aravallis.`,
      'Combine it with a stop at the Dwarkadhish Temple in Kankroli (see our Nathdwara guide) and the Rajsamand Bazaar for local handicrafts, and you have a full morning out.',
    ]},
    { heading: 'Practical Tips', body: [
      'Entry to the lake and ghats is free. The best photography is from the Nauchowki Bund facing east in the morning. There is a small café near the parking area. Boat rides are available on the lake for ₹50–₹80 per person on weekends. The lake is at its fullest and most beautiful in September–October after the monsoon.',
    ]},
  ],

  'nathdwara-shrinathji-complete-guide': [
    { heading: 'The Town That Grew Around a Temple', body: [
      'Nathdwara, which means "Gateway of the Lord", is a small town on the banks of the Banas River, 20 km north of Kankroli. It is one of the most important pilgrimage destinations for Vaishnavas worldwide, known for the Shrinathji temple — a shrine housing a black stone image of Lord Krishna as a seven-year-old child lifting Govardhan Hill.',
      'The image is believed to have been brought from Vrindavan in 1672 AD to protect it from the Mughal emperor Aurangzeb. When the cart carrying it stopped at Sinhad village (now Nathdwara), it is said the wheels sank into the earth — a divine sign that the Lord wished to reside there.',
    ]},
    { heading: 'The Darshan Schedule', body: [
      'The Shrinathji temple follows a strict daily schedule of seven darshanskals (viewing periods): Mangala (dawn), Shringar (morning dressing), Gwal (9 AM), Rajbhog (noon), Uttapan (3:30 PM), Bhog (5 PM), and Arti/Shayan (evening). Each darshan reveals the deity in a different setting and costume.',
      'The most spectacular is Rajbhog darshan at noon, when the Lord is dressed in ornate jewels and the hall is filled with incense and devotional music. Arrive 30 minutes early and join the queue — weekdays are quieter than weekends.',
    ]},
    { heading: `Pichwai Paintings — Nathdwara's Other Art Form`, body: [
      `Nathdwara is famous for Pichwai paintings — large cloth paintings (pichh = back, wai = hanging) that depict episodes from Krishna's life and are displayed behind the Shrinathji idol in the temple. Local artisans have kept this tradition alive for three centuries.`,
      'The bazaar lanes behind the temple are lined with shops selling Pichwai paintings, from small souvenirs to large museum-quality pieces. Original works can cost ₹2,000 to ₹2 lakh; printed reproductions are far cheaper. It is worth watching an artisan at work — several workshops let visitors observe.',
    ]},
    { heading: 'Getting There & Tips', body: [
      'Nathdwara is 20 km from Hari Bhakti Farm — about 30 minutes by car. There is no entry fee to the temple but mobile phones must be deposited at the cloak room (₹10). Dress modestly — men in dhoti-kurta or trousers, women in salwar-kurta or saree. Prasad (sweets) is distributed after darshan and is delicious.',
    ]},
  ],

  'kumbhalgarh-fort-rajasthan-great-wall': [
    { heading: 'The Wall that Rivals China', body: [
      `Kumbhalgarh Fort sits 1,100 metres above sea level in the Aravalli Range, 48 km from our farm. Its outer wall stretches 36 km — the second-longest continuous wall in the world after the Great Wall of China. The fort was built by Maharana Kumbha between 1443 and 1458 AD and has never been conquered — only breached once, briefly, when the Mughal Emperor Akbar cut off the fort's water supply.`,
      'The fort is a UNESCO World Heritage Site (part of the Hill Forts of Rajputana cluster) and is home to 365 temples — one for every day of the year.',
    ]},
    { heading: 'Inside the Fort', body: [
      'The inner fort contains the palace complex where Maharana Pratap, the legendary Rajput warrior-king, was born in 1540. The Kumbha Palace, the Badal Mahal (Cloud Palace) at the top, and the Vedi Temple are the main highlights. The Badal Mahal offers sweeping views of the Aravalli Range stretching into the haze — on clear days you can see Jodhpur 70 km away.',
      'A Sound and Light show runs at the fort every evening at 7 PM (in Hindi and English on alternate days), narrating the history of Maharana Kumbha. It is one of the best such shows in Rajasthan.',
    ]},
    { heading: 'Planning Your Visit', body: [
      'Allow at least 3–4 hours to explore the fort properly. Wear comfortable walking shoes — the path from the main gate to the Badal Mahal is steep. The fort opens at 9 AM; arrive early to avoid the afternoon heat. Entry fee: ₹150 for Indian nationals, ₹600 for foreign nationals.',
      'Combine your Kumbhalgarh visit with a drive through the Kumbhalgarh Wildlife Sanctuary, which surrounds the fort on three sides. The sanctuary is home to wolves, leopards, sloth bears, and various antelopes — best spotted at dawn or dusk.',
    ]},
  ],

  'haldighati-battle-history-day-trip': [
    { heading: 'The Battlefield that Changed Rajputana', body: [
      `Haldighati is a narrow mountain pass 24 km from Hari Bhakti Farm in the Aravalli Range. On June 18, 1576, it became the site of one of Rajasthan's most celebrated battles — Maharana Pratap of Mewar against the Mughal forces of Emperor Akbar, led by Man Singh of Amber.`,
      `The pass gets its name from the turmeric-yellow (haldi) colour of the soil — a soft slate found nowhere else in Rajasthan. The battle was fierce and inconclusive. Maharana Pratap's horse Chetak, mortally wounded, carried his master to safety before collapsing — a story still told with reverence across Rajasthan.`,
    ]},
    { heading: 'What to Visit at Haldighati', body: [
      'The Maharana Pratap Memorial Museum (Chetak Smarak) is the main attraction — a well-curated museum with life-size dioramas of the battle, weapons, armour, paintings, and an audiovisual presentation of the battle. The Chetak Memorial, a small marble monument surrounded by flowering plants, marks the spot where the horse died.',
      'The Rakt Talai (Blood Pond) is a small lake that local legend says turned red with the blood of fallen soldiers. Today it is a quiet spot for reflection surrounded by Aravalli scrub.',
    ]},
    { heading: 'Getting There', body: [
      'Haldighati is about 35 minutes from our farm by car via Khamnor. Museum opening hours: 9 AM–5 PM, closed Mondays. Entry fee: ₹50. The best time to visit is early morning before the tour buses arrive. Combine with a stop at Khamnor village for its small local fair that runs on Tuesdays.',
    ]},
  ],

  'udaipur-day-trip-from-rajsamand': [
    { heading: 'The City of Lakes', body: [
      `Udaipur, the "Venice of the East," is one of India's most beautiful cities — a romantic landscape of blue water, white marble palaces, and Aravalli hills. It is 66 km from Hari Bhakti Farm, an easy 1.5-hour drive, making it the perfect day trip.`,
      'Founded in 1559 by Maharana Udai Singh II of the Sisodia Rajput clan, Udaipur served as the capital of the Mewar Kingdom for over 400 years. The city is built around Lake Pichola and Fateh Sagar Lake, with the City Palace rising dramatically from the lakeside.',
    ]},
    { heading: 'Our Recommended One-Day Itinerary', body: [
      '7:30 AM — Leave Hari Bhakti Farm after breakfast. 9:30 AM — Arrive Udaipur, start at Saheliyon Ki Bari (Garden of Maidens), a 18th-century royal garden with fountains and marble pavilions. 11 AM — City Palace — one of the largest palace complexes in Rajasthan, with museums, mirror work, and lake views. 1 PM — Lunch at a rooftop restaurant on Lake Palace Road overlooking Pichola. 3 PM — Boat ride on Lake Pichola to the Lake Palace (exterior view) and Jag Mandir island. 5 PM — Stroll through the Old City bazaars: miniature paintings, silver jewellery, block-printed fabrics. 6 PM — Evening at Ambrai Ghat for sunset. Drive back by 9 PM.',
    ]},
    { heading: 'Hidden Gems Near Udaipur', body: [
      'If you have extra time, Bagore Ki Haveli (9 AM–5:30 PM, ₹60) is a beautiful riverside haveli turned museum with 100 rooms of period furniture and costumes. Shilpgram, 3 km west, is a craft village where artisans from 14 states demonstrate traditional crafts live.',
    ]},
  ],

  'ranakpur-jain-temples-marble-marvel': [
    { heading: 'A Temple Built of Light', body: [
      'The Ranakpur Jain Temple complex, 60 km from our farm in the Pali district, is considered one of the most important and beautiful pilgrimage sites in Jainism. The main temple — the Chaumukha Mandir (Four-Faced Temple) — was built in the 15th century and took 50 years to complete.',
      'The temple has 1,444 intricately carved marble pillars, each one unique. No two pillars carry the same design. The sheer density of sculptural work — celestial beings, elephants, lotuses, musicians, and geometric patterns — is overwhelming. The marble was quarried from the hills near Makrana, the same stone used to build the Taj Mahal.',
    ]},
    { heading: 'Exploring the Complex', body: [
      'The complex contains four temples: the Chaumukha Mandir (main), Parshvanath Temple, Amba Mata Temple, and Surya Narayan Temple. Non-Jains may enter the main temple but must remove footwear and leather items. Photography is allowed outside and in the courtyard but not inside the inner sanctum.',
      'The light inside the Chaumukha Mandir filters through latticed marble screens, casting patterns of shadows and light across the floor — the effect is meditative and magical, especially between 11 AM and 1 PM when the sun is high.',
    ]},
    { heading: 'Planning the Visit', body: [
      'Ranakpur is 60 km from our farm — about 1.5 hours by road via Desuri. Temple visiting hours for non-Jains: 12 PM–5 PM. Arrive at 12 PM sharp to avoid crowds. There is a small café in the complex. Combine with a drive through the Ranakpur Wildlife Sanctuary for leopard, bear, and bird sightings.',
    ]},
  ],

  'mewar-cuisine-dishes-near-rajsamand': [
    { heading: 'A Cuisine Shaped by Land and Tradition', body: [
      `Mewar cuisine — the food tradition of the kingdom that once ruled Rajsamand, Udaipur, Chittorgarh, and Nathdwara — is one of Rajasthan's richest and most distinctive. Developed in an arid landscape where vegetables were scarce and water precious, Mewar cooking is built around gram flour, dried lentils, buttermilk, milk, and ghee.`,
    ]},
    { heading: '10 Dishes You Must Try', body: [
      '1. Dal Baati Churma — The holy trinity of Rajasthani cuisine. Hard wheat rolls (baati) baked over cow-dung cakes, dunked in five-lentil dal, served alongside churma (crushed wheat sweetened with ghee and sugar). Our kitchen makes this every Sunday.',
      '2. Laal Maas — A fiery mutton curry made with mathania red chillies from Jodhpur. Rich, smoky, and genuinely hot. Best eaten with bajra roti.',
      '3. Gatte ki Sabzi — Gram flour dumplings simmered in a tangy yogurt gravy spiced with cumin and coriander. A staple across all Rajasthani households.',
      '4. Ker Sangri — A dish unique to Rajasthan: dried desert berries (ker) and long beans (sangri) cooked with mustard seeds, dried red chilli and amchur. Tastes like concentrated Rajasthan.',
      '5. Bajra Khichdi — Pearl millet cooked soft with ghee and served with kadhi (yogurt gravy). A winter staple at our farm kitchen.',
      '6. Mohan Maas — A royal mutton preparation from the Mewar kitchens — slow-cooked in milk and cream with cardamom and saffron. Mild, aromatic, and utterly rich.',
      '7. Malpua — Sugary fried pancakes soaked in sugar syrup, often served with rabri (condensed milk cream). Found at every fair and festival in Rajsamand.',
      '8. Raab — A fermented bajra porridge, warm and subtly sour. The original Rajasthani health drink, consumed every morning by farmers across the district.',
      '9. Doodh Jalebi — Fresh jalebis (spiral fried sweets) dipped in hot full-fat milk. Available at the Kankroli bazaar every morning from 7–9 AM.',
      '10. Chakki ki Shaak — Wheat gluten dumplings in a spiced gravy. A specialty of Rajsamand that you will not easily find outside the district.',
    ]},
  ],

  'rajsamand-mela-festival-guide': [
    { heading: 'The Annual Gathering at the Lake', body: [
      `The Rajsamand Mela is one of Rajasthan's most vibrant annual fairs, held at Rajsamand Lake each year on the occasion of Ashwin Shukla Paksha (September–October). Thousands of pilgrims, traders, folk artists, and families descend on the lake for three to five days of colour, music, and celebration.`,
      'The fair has been held since the reign of Maharana Raj Singh I — over three centuries of unbroken tradition. It begins with a ceremonial bath in the lake (snan) at sunrise, followed by puja at the lakeside temples.',
    ]},
    { heading: 'What Happens at the Mela', body: [
      'Folk music and dance are the heart of the fair. Ghoomar, Kalbeliya, and Bhavai performances happen throughout the day and into the night. Local musicians playing sarangi, dholak, and algoja set up under neem trees along the bund. The mela ground is lined with hundreds of stalls selling everything from Rajasthani jewellery and block-print fabrics to livestock, agricultural tools, and street food.',
      'Camel and bullock cart races are held at the edge of the fair. Traditional wrestlers (pehelwans) compete in open-air akharas. Local school children perform cultural shows on a makeshift stage near the Nauchowki Bund.',
    ]},
    { heading: 'Visiting During the Mela', body: [
      'The mela typically runs for 3–5 days. Check with the Rajsamand district administration for exact dates (they vary by the lunar calendar each year). Arrive early morning (7 AM) for the best atmosphere. Parking fills up quickly — auto-rickshaws from Kankroli town are a better option. The fair is family-friendly and safe.',
    ]},
  ],

  'best-time-to-visit-rajasthan-farmstay': [
    { heading: 'Every Season Has Its Mood', body: [
      'Rajsamand, like most of Rajasthan, undergoes a dramatic transformation across seasons. The experience at Hari Bhakti Farm changes completely depending on when you visit — and there is no single "best" time, only the best time for what you want.',
    ]},
    { heading: 'October to February — The Classic Season', body: [
      'This is when most guests visit. The air is crisp and cool (15–28°C in daytime, dropping to 8–12°C at night in December–January), the skies are clear blue, and the farm is at its most lush after the monsoon. Peacocks display at sunrise. All outdoor activities — yoga, nature walks, pool time — are at their best. Diwali (October/November) and Makar Sankranti (January) bring local festivals.',
    ]},
    { heading: 'March to May — The Hot Season', body: [
      'Temperatures climb from 30°C in March to 42–45°C by May. The pool becomes the centre of the farm — guests spend mornings in the water and retreat to air-conditioned rooms in the afternoon. Sunsets are spectacular. This season is ideal if you want fewer crowds and lower tariffs. The farm is quieter, the service more personal.',
    ]},
    { heading: 'June to September — The Monsoon', body: [
      'The first rain usually arrives in late June. By July the farm is transformed — the Aravalli hills turn green overnight, the air smells of earth and rain, and Rajsamand Lake begins to fill. The pool overflows, frogs come out, and peacocks dance. This is one of the most atmospheric times to visit. Roads can get waterlogged briefly but are always passable. Our farm receives 500–600 mm of rain per season.',
    ]},
  ],

  'birdwatching-rajsamand-farm-guide': [
    { heading: `A Birder's Paradise in the Aravallis`, body: [
      `Rajsamand Lake and its surrounding Aravalli wetlands are a significant birding destination in southern Rajasthan. The lake's shallow margins host wading birds; the scrub forests hold raptors; our farm itself has fruit trees that attract bulbuls, sunbirds and kingfishers year-round.`,
    ]},
    { heading: '14 Species to Watch For', body: [
      `1. Indian Peafowl — Our resident flock of 40+ peacocks displays every morning from August to March. 2. Bar-headed Goose — Winter migrant from Tibet; arrives at Rajsamand Lake in November. 3. Common Kingfisher — Brilliant blue streak along the farm\'s water channels. 4. Indian Roller — Electric blue wings visible from the road. 5. Black-winged Stilt — Long-legged wader at the lake's shallow edges. 6. Painted Stork — Large, colourful stork; arrives in October–November. 7. Sarus Crane — World\'s tallest flying bird; seen in pairs in the farm fields nearby. 8. White-breasted Waterhen — Skulks in our water garden. 9. Purple Sunbird — Tiny iridescent bird visiting our bougainvillea. 10. Red-wattled Lapwing — Our loudest alarm clock. 11. Indian Grey Hornbill — Nests in old mango trees. 12. Booted Eagle — Hunting over the Aravalli slopes at dawn. 13. Shikra — Small hawk in the farm\'s neem canopy. 14. Yellow-footed Green Pigeon — Calls from the banyan near the pool every evening.`,
    ]},
    { heading: 'Best Birding Times and Spots', body: [
      `Dawn (6–8 AM) and dusk (5–6:30 PM) are the busiest times. Our farm\'s kitchen garden, the orchard, and the pool area are good starting points. For waterbirds, drive to Rajsamand Lake bund (8 km) and walk the ghats. The Kumbhalgarh Wildlife Sanctuary (48 km) is excellent for forest species. We lend binoculars and a laminated bird checklist to all guests.`,
    ]},
  ],

  'yoga-wellness-rajasthan-farmstay': [
    { heading: 'Why a Farm is the Ideal Yoga Setting', body: [
      'A yoga retreat does not need a luxury studio or a Himalayan ashram. What it needs is clean air, quiet, and space to breathe. At Hari Bhakti Farm, our morning yoga sessions take place on an open terrace with the Aravalli range visible in the distance, the peacocks calling from the garden below, and the air scented with jasmine.',
      'Our sessions start at 6:30 AM — just as the sky turns from blue to amber — and run for one hour. The format is gentle Hatha yoga with pranayama and a 10-minute meditation close. Sessions are led by our in-house instructor for groups of 2–10 guests.',
    ]},
    { heading: `The Farm's Role in Wellness`, body: [
      'Beyond the mat, the farm itself is a wellness practice. Walking barefoot on the earth, helping in the kitchen garden, milking a cow, eating food that was harvested that morning — these are grounding experiences that no spa can replicate. Guests often tell us that the "doing nothing" hours — sitting with a cup of chai under the neem tree, watching butterflies — are the most restorative part of their stay.',
    ]},
    { heading: 'Planning a Wellness Stay', body: [
      'We recommend a minimum 3-night stay for a genuine wellness experience. We offer a Wellness Package that includes daily yoga, farm-fresh vegetarian meals, an Ayurvedic consultation, and one guided nature walk. WhatsApp us to know current availability and pricing.',
    ]},
  ],

  'organic-farming-at-hari-bhakti': [
    { heading: 'The Philosophy', body: [
      'When we started Hari Bhakti Farm, we made one commitment: every vegetable, herb, and fruit served to our guests would be grown on the farm using only natural inputs. No synthetic fertilisers. No chemical pesticides. Just compost, neem oil, cow urine, and patience.',
      'Today, the farm kitchen garden covers about half an acre and grows seasonal produce through the year. In winter: tomatoes, spinach, fenugreek, brinjal, cauliflower, radish, carrots. In summer: bottle gourd, bitter gourd, okra, cluster beans. In monsoon: ridge gourd, cucumbers, green chillies.',
    ]},
    { heading: 'Composting — The Heart of the System', body: [
      'We run two compost pits on the farm that process kitchen waste, garden clippings, and cow dung into rich compost within 45 days. The compost is applied at the start of every sowing season. Nothing leaves the farm as waste — it all goes back into the soil.',
    ]},
    { heading: 'The Cow at the Centre', body: [
      `Our two Gir cows — Gauri and Lakshmi — are the anchors of the farm\'s biological cycle. Their dung feeds the compost pits. Their urine, diluted 1:10 with water, is our principal pesticide. Their milk, A2 variety, goes into the farm kitchen every morning for chai, curd, and ghee. Guests can participate in the morning milking at 6 AM.`,
    ]},
    { heading: 'Eating from the Farm', body: [
      'Our kitchen is led by Sunita Sharma, who has cooked Rajasthani food for over 20 years. Every meal is a translation of what the farm gives that day. Guests who stay for three nights or more often say the food is the highlight — simple, seasonal, and made entirely from scratch. We do not use packaged masalas. Spices are ground fresh every morning.',
    ]},
  ],

  'family-weekend-getaway-near-rajsamand': [
    { heading: `Rajsamand: India's Most Underrated Family Destination`, body: [
      'While Udaipur and Jaipur attract millions of tourists, neighbouring Rajsamand remains remarkably crowd-free — despite having a heritage lake, three major historical sites, and one of the finest farmstays in southern Rajasthan. For families wanting an authentic, relaxed Rajasthan experience without the tourist crowds, it is close to perfect.',
    ]},
    { heading: 'A Two-Day Family Itinerary', body: [
      `Day 1 — Arrive at Hari Bhakti Farm by noon. Check in, freshen up, lunch (farm-fresh thali). Afternoon: pool time, children\'s activities (cow feeding, pottery). 5 PM: guided farm walk. Sunset at Rajsamand Lake (8 km). Bonfire and dinner at the farm. Day 2 — Early morning yoga (optional). Breakfast at the farm. Morning: Nathdwara temple visit (darshan at 9 AM, Pichwai painting workshop). 12 PM: drive to Haldighati Museum. 2 PM: lunch at Molela village (famous for terracotta folk art). 4 PM: back to farm for last swim. 6 PM: check out or extend stay.`,
    ]},
    { heading: 'For Kids Specifically', body: [
      'Children love the farm. There is no schedule, no screens (unless you choose), and plenty to discover. Morning: collect eggs, water the plants, feed the cows. Afternoon: pool and water games. Evening: catch fireflies. Before bed: identify constellations from the rooftop — with no light pollution, the sky is extraordinary.',
    ]},
  ],

  'rajasthani-dal-baati-churma-recipe': [
    { heading: 'The Dish That Defines Mewar', body: [
      'Dal Baati Churma is not just a dish — it is a ritual. In Rajasthan, no celebration, homecoming, or festival is complete without it. The three components — dal (five-lentil stew), baati (hard wheat rolls), and churma (sweet crumbled wheat) — are prepared separately and brought together at the table.',
    ]},
    { heading: 'The Baati', body: [
      'Ingredients: 2 cups whole wheat flour, 4 tbsp ghee, 1 tsp ajwain (carom seeds), salt, water to knead. Method: Mix flour, ghee, ajwain, and salt. Add water gradually and knead into a stiff dough (stiffer than roti dough). Divide into 12 equal balls. Flatten slightly. Traditionally baked over slow-burning cow-dung cakes for 30–40 minutes, turning once. In a modern oven: 200°C for 25–30 min until golden and hard. Immediately dip hot baatis in a bowl of melted ghee.',
    ]},
    { heading: 'The Panchmel Dal', body: [
      'Ingredients: ¼ cup each of toor dal, moong dal, chana dal, urad dal, masoor dal. Soak for 30 min, then pressure-cook with turmeric and water. In a pan: heat ghee, add hing (asafoetida), cumin, cloves, cardamom, bay leaf, dried red chilli. Add onion paste, ginger-garlic paste, tomato purée. Cook 10 min. Add cooked dal, water, salt. Simmer 15 min. Finish with a drizzle of ghee and coriander.',
    ]},
    { heading: 'The Churma', body: [
      'Bake or fry the baati until golden. Crumble while still warm. Mix with powdered sugar (or jaggery), ghee, and cardamom. Add 2 tbsp warm milk to bring it together. Optionally garnish with slivered almonds and pistachios. The churma should be dry yet moist — like a crumble. Serve alongside the dal and split baatis.',
    ]},
  ],

  'pool-villa-design-story': [
    { heading: 'Three Years in the Making', body: [
      'When we first purchased the land at Mohi village, there was a single old farmhouse with two rooms and a kitchen. The idea of a luxury villa with a private pool felt audacious — perhaps impossible. Three years, one architect, and many arguments with contractors later, the Farm Villa was complete.',
    ]},
    { heading: 'The Design Philosophy', body: [
      'We wanted the villa to feel like it had always been there — not a new construction, but something that had grown from the earth over decades. The architect used locally quarried sandstone for the walls, lime-plaster for the interiors (naturally cooling), and Rajasthani jharokha windows for ventilation and light.',
      'The private pool — 12 × 6 metres — was the most expensive and most complex part of the project. We chose a natural blue mosaic tile from Jaipur that changes from turquoise in shallow water to deep cobalt in the middle. The pool deck is in white marble with a thin strip of granite edging.',
    ]},
    { heading: 'The Details that Matter', body: [
      `Every detail in the villa was sourced locally or made by hand. The four-poster bed is carved teak from Udaipur. The mirror-work cushions are from a women\'s cooperative in Bhilwara. The hand-block-print bed linen was commissioned from a printer in Sanganer near Jaipur. The pendant lights are recycled copper vessels, wired and fitted here in Kankroli.`,
      'The result is a space that feels simultaneously opulent and deeply rooted in its place. Guests consistently call it the most beautiful room they have ever stayed in. That is the best review we could ask for.',
    ]},
  ],
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const sections = articles[params.slug] ?? []
  const related = posts.filter((p) => p.slug !== params.slug && p.category === post.category).slice(0, 3)

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-3">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold font-serif max-w-3xl leading-tight mb-4">{post.title}</h1>
          <p className="text-sm text-white/70">{post.date} · {post.readTime}</p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-[#f7f3ec]">
        <div className="max-w-3xl mx-auto px-6">

          {/* Excerpt */}
          <p className="text-lg text-[#4a5c3a] leading-relaxed mb-10 border-l-4 border-[#c8973a] pl-5 italic">
            {post.excerpt}
          </p>

          {/* Content sections */}
          {sections.length > 0 ? (
            sections.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-xl font-bold font-serif text-[#2d4a1e] mb-4">{section.heading}</h2>
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-700 leading-[1.85] mb-4">{para}</p>
                ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">Full article coming soon.</p>
          )}

          {/* WhatsApp CTA */}
          <div className="mt-12 p-6 bg-[#2d4a1e] rounded-2xl text-white text-center">
            <p className="font-serif text-xl font-bold mb-2">Ready to Experience Hari Bhakti Farm?</p>
            <p className="text-white/75 text-sm mb-4">WhatsApp us with your dates and we'll plan the perfect visit for you.</p>
            <a
              href={`https://wa.me/919928738349?text=Hi%2C%20I%20read%20your%20blog%20about%20${encodeURIComponent(post.title)}%20and%20would%20like%20to%20plan%20a%20visit`}
              target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-white font-bold px-6 py-3 rounded-full text-sm"
            >
              💬 WhatsApp Us Now
            </a>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link href="/blog" className="text-[#c8973a] font-semibold text-sm hover:underline">
              ← Back to Farm Journal
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold font-serif text-[#2d4a1e] mb-8">More from {post.category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                  <article className="bg-[#f7f3ec] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold font-serif text-[#2d4a1e] text-base mb-2 group-hover:text-[#c8973a] transition-colors">{r.title}</h3>
                      <p className="text-xs text-gray-400">{r.date} · {r.readTime}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
