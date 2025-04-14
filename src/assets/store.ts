import { create } from "zustand";
export const storeData = create<any>((set, get) => ({
  darkMode: true,
  setDarkMode: (mode: boolean) => set(() => ({ darkMode: !mode })),
  news: [
    {
      id: 654614,
      date: "April 09, 2025",
      reading_duration: "6 min",
      title: "TowN'go Launches New 'Adventure Ready' Trailer Collection",
      subtitle:
        "Expanded fleet features off-grid capabilities and family-friendly options.",
      image: "/news/1.jpg",
      paragraphs: [
        {
          description:
            "TowN'go is excited to announce the launch of its new 'Adventure Ready' collection of camping trailers. This expansion of our fleet includes a range of trailers specifically equipped for off-grid adventures and larger family groups, catering to the growing demand for more diverse camping experiences.",
        },
        {
          title: "Off-Grid Exploration",
          description:
            "The new off-grid trailers come equipped with features such as solar panels, larger water tanks, and robust power management systems. This allows adventurers to venture further off the beaten path and enjoy extended stays in remote locations without compromising on comfort and convenience. These trailers are perfect for exploring Quebec's vast wilderness.",
        },
        {
          title: "Family Comfort on the Road",
          description:
            "Recognizing the increasing number of families choosing camping holidays, the 'Adventure Ready' collection also includes larger trailers with multiple sleeping areas, dedicated dining spaces, and enhanced storage solutions. These options ensure that families can travel comfortably and have all the amenities they need for a memorable trip.",
        },
        {
          title: "Seamless Booking Experience",
          description:
            "Users can easily browse and book trailers from the new 'Adventure Ready' collection through the TowN'go platform. Detailed specifications, photos, and virtual tours are available to help renters choose the perfect trailer for their needs. Our streamlined booking process ensures a hassle-free experience from start to finish.",
        },
        {
          title: "Commitment to Quality",
          description:
            "As with all TowN'go trailers, the 'Adventure Ready' collection undergoes rigorous maintenance and safety checks to ensure the highest standards of quality and reliability. Our commitment is to provide renters with safe, comfortable, and well-equipped trailers for unforgettable adventures across Quebec and beyond.",
        },
      ],
    },
    {
      id: 646461,
      date: "April 05, 2025",
      reading_duration: "5 min",
      title: "TowN'go Reports Significant Growth in First Quarter of 2025",
      subtitle:
        "Surge in demand reflects increasing popularity of camping and RV travel.",
      image: "/news/7.jpg",
      paragraphs: [
        {
          description:
            "TowN'go today announced a significant surge in demand for its camping trailer rentals during the first quarter of 2025. The company reported a substantial increase in bookings compared to the same period last year, indicating a growing trend in the popularity of camping and RV travel within Quebec.",
        },
        {
          title: "Increased Booking Volume",
          description:
            "The first quarter saw a remarkable rise in the number of bookings across TowN'go's entire fleet. This increase can be attributed to several factors, including the easing of travel restrictions, a growing interest in outdoor activities, and TowN'go's continued efforts to provide a user-friendly and reliable rental platform.",
        },
        {
          title: "Expanding User Base",
          description:
            "TowN'go has also witnessed a significant expansion of its user base, with many first-time renters choosing camping trailers as a comfortable and convenient way to explore the natural beauty of Quebec. Positive reviews and word-of-mouth referrals have contributed to this growth.",
        },
        {
          title: "Investment in Fleet and Technology",
          description:
            "To meet the increasing demand, TowN'go has continued to invest in expanding and upgrading its trailer fleet, as well as enhancing its online platform. These investments ensure that renters have access to a wide selection of high-quality trailers and a seamless booking experience.",
        },
        {
          title: "Positive Outlook for the Season",
          description:
            "With the arrival of warmer weather and the traditional start of the camping season, TowN'go anticipates continued strong demand throughout the remainder of 2025. The company remains committed to providing exceptional service and enabling unforgettable outdoor adventures for its growing community of renters.",
        },
      ],
    },
    {
      id: 948151,
      date: "April 01, 2025",
      reading_duration: "7 min",
      title:
        "TowN'go Partners with Local Tourism Boards for Regional Promotion",
      subtitle:
        "Collaborative initiatives to highlight Quebec's diverse travel destinations.",
      image: "/news/3.jpg",
      paragraphs: [
        {
          description:
            "TowN'go is proud to announce new partnerships with several local tourism boards across Quebec. These collaborations aim to jointly promote the diverse travel destinations within the province and encourage both local and out-of-province travelers to explore the region using TowN'go's rental services.",
        },
        {
          title: "Joint Marketing Efforts",
          description:
            "As part of these partnerships, TowN'go will work closely with tourism boards to create co-branded marketing campaigns. These initiatives will include featuring specific regions and attractions on the TowN'go platform, as well as joint participation in travel fairs and online promotions.",
        },
        {
          title: "Highlighting Local Gems",
          description:
            "The collaborations will focus on showcasing the unique appeal of different regions in Quebec, from the Laurentians and the Eastern Townships to the Gaspé Peninsula. TowN'go users will have easy access to information about local events, points of interest, and recommended camping spots within these areas.",
        },
        {
          title: "Supporting Local Economies",
          description:
            "By promoting regional tourism, TowN'go aims to contribute to the growth of local economies. Encouraging travelers to explore different parts of Quebec and utilize local services will have a positive impact on businesses and communities throughout the province.",
        },
        {
          title: "Enhanced Travel Information",
          description:
            "Through these partnerships, TowN'go will also be able to provide its users with more comprehensive and up-to-date travel information, including permit requirements, local regulations, and tips for planning their trips within specific regions. This will further enhance the overall user experience.",
        },
      ],
    },
    {
      id: 175127,
      date: "March 28, 2025",
      reading_duration: "6 min",
      title:
        "TowN'go Introduces Flexible Cancellation and Rescheduling Policies",
      subtitle: "New options provide greater peace of mind for renters.",
      image: "/news/4.jpg",
      paragraphs: [
        {
          description:
            "TowN'go is committed to providing its customers with a stress-free and flexible rental experience. In line with this commitment, we are pleased to announce the introduction of new, more flexible cancellation and rescheduling policies for all camping trailer bookings.",
        },
        {
          title: "Enhanced Cancellation Options",
          description:
            "The updated cancellation policy offers renters more options and greater flexibility should their travel plans change. Depending on the timing of the cancellation, renters may be eligible for a full or partial refund, providing them with greater peace of mind when booking their adventures in advance.",
        },
        {
          title: "Easy Rescheduling",
          description:
            "Recognizing that unforeseen circumstances can arise, TowN'go has also simplified its rescheduling process. Renters can now easily modify their booking dates, subject to availability, with minimal hassle and transparent fees. This allows for greater adaptability in their travel plans.",
        },
        {
          title: "Customer-Centric Approach",
          description:
            "These changes reflect TowN'go's ongoing commitment to putting the customer first. We understand that travel plans can be unpredictable, and these updated policies are designed to provide our renters with the flexibility and confidence they need when booking their camping trailer.",
        },
        {
          title: "Details and Conditions",
          description:
            "Full details of the new cancellation and rescheduling policies, including specific timelines and any applicable fees, are available on the TowN'go website and during the booking process. We encourage all renters to review these policies before finalizing their reservations to ensure they understand the available options.",
        },
      ],
    },
    {
      id: 479847,
      date: "March 20, 2025",
      reading_duration: "5 min",
      title:
        "TowN'go Partners with Outdoor Gear Retailer for Exclusive Discounts",
      subtitle: "Renters to receive special offers on camping essentials.",
      image: "/news/5.jpg",
      paragraphs: [
        {
          description:
            "TowN'go has teamed up with leading outdoor gear retailer, 'Adventure Outfitters,' to offer exclusive discounts to TowN'go renters. This partnership aims to make it even easier and more affordable for adventurers to equip themselves for their camping trips.",
        },
        {
          title: "Savings on Essential Gear",
          description:
            "Through this collaboration, TowN'go renters will gain access to special offers and discounts on a wide range of camping essentials at Adventure Outfitters. This includes tents, sleeping bags, cooking equipment, hiking gear, and much more, helping them prepare for their outdoor excursions without breaking the bank.",
        },
        {
          title: "Seamless Integration",
          description:
            "Information about these exclusive discounts will be seamlessly integrated into the TowN'go booking confirmation process and through email communications. Renters will receive unique codes or links that they can use to redeem their savings at Adventure Outfitters online or in-store.",
        },
        {
          title: "Enhancing the Camping Experience",
          description:
            "This partnership is another way TowN'go is striving to enhance the overall camping experience for its users. By providing access to high-quality outdoor gear at discounted prices, we aim to make their adventures more comfortable, enjoyable, and well-prepared.",
        },
        {
          title: "Commitment to Value",
          description:
            "TowN'go is committed to providing not only convenient and reliable trailer rentals but also added value to its customers. This partnership with Adventure Outfitters is a testament to that commitment, offering tangible benefits that go beyond the rental itself.",
        },
      ],
    },
    {
      id: 146214,
      date: "March 15, 2025",
      reading_duration: "7 min",
      title: "TowN'go Announces Expansion of Pet-Friendly Trailer Options",
      subtitle:
        "More choices for adventurers traveling with their furry companions.",
      image: "/news/6.jpg",
      paragraphs: [
        {
          description:
            "TowN'go is excited to announce a significant expansion of its selection of pet-friendly camping trailers. Recognizing that many adventurers love to travel with their furry companions, we are increasing the number of trailers in our fleet that are specifically designated as pet-friendly.",
        },
        {
          title: "More Choices for Pet Owners",
          description:
            "The expanded range of pet-friendly trailers offers renters more choices in terms of size, amenities, and layout, ensuring they can find the perfect option to comfortably accommodate both themselves and their pets. These trailers are equipped with features that make traveling with pets easier and more enjoyable.",
        },
        {
          title: "Dedicated Pet-Friendly Features",
          description:
            "Many of our pet-friendly trailers include features such as secure tie-down points for pet carriers, easy-to-clean flooring, and designated areas for pet food and water bowls. We aim to provide a comfortable and safe environment for all members of the traveling party, including the four-legged ones.",
        },
        {
          title: "Responsible Pet Travel",
          description:
            "TowN'go encourages responsible pet travel and provides guidelines for renters traveling with animals, including tips for ensuring their pet's safety and comfort during the journey and at the campsite. We believe that pets are part of the family and should be able to enjoy outdoor adventures too.",
        },
        {
          title: "Book Your Pet-Friendly Getaway",
          description:
            "Renters can easily identify and book pet-friendly trailers through the TowN'go platform using specific filters. We are committed to making it easier than ever for pet owners to enjoy the beauty of Quebec's outdoors with their beloved animals. Explore our expanded selection today!",
        },
      ],
    },
    {
      id: 312147,
      date: "March 10, 2025",
      reading_duration: "6 min",
      title:
        "TowN'go Implements Carbon Offset Program for Eco-Conscious Travelers",
      subtitle: "Renters can contribute to environmental sustainability.",
      image: "/news/9.jpg",
      paragraphs: [
        {
          description:
            "TowN'go is pleased to announce the implementation of a new carbon offset program, allowing our eco-conscious travelers to contribute to environmental sustainability when booking their camping trailer rentals. We are committed to minimizing our environmental impact and providing our customers with opportunities to do the same.",
        },
        {
          title: "Offsetting Your Journey",
          description:
            "During the booking process, renters will now have the option to contribute a small fee to offset the estimated carbon emissions associated with their trip. These contributions will be directed to certified carbon offset projects that help reduce greenhouse gases.",
        },
        {
          title: "Supporting Environmental Initiatives",
          description:
            "Our carbon offset program supports a variety of reputable environmental initiatives, including reforestation projects, renewable energy development, and conservation efforts. By participating, renters can directly contribute to a more sustainable future for travel and the environment.",
        },
        {
          title: "Easy Opt-In During Booking",
          description:
            "The option to participate in the carbon offset program will be seamlessly integrated into the TowN'go booking process. Renters can easily choose to contribute at checkout, making it a simple and convenient way to make a positive environmental impact.",
        },
        {
          title: "Transparency and Accountability",
          description:
            "TowN'go is committed to transparency and will provide information about the carbon offset projects supported through this program. We believe in accountability and want our renters to feel confident that their contributions are making a real difference.",
        },
      ],
    },
    {
      id: 1765174,
      date: "March 05, 2025",
      reading_duration: "5 min",
      title:
        "TowN'go Partners with Local Food Producers for Enhanced Camping Meals",
      subtitle:
        "Renters can pre-order locally sourced meal kits for their trips.",
      image: "/news/2.jpg",
      paragraphs: [
        {
          description:
            "TowN'go is excited to announce a new partnership with several local food producers across Quebec. This collaboration will allow renters to pre-order delicious and locally sourced meal kits to enhance their camping experience and support regional agriculture.",
        },
        {
          title: "Fresh and Local Ingredients",
          description:
            "Our meal kits will feature fresh, high-quality ingredients sourced directly from local farms and producers in Quebec. This ensures delicious and nutritious meals while also supporting the local economy and reducing the environmental impact of food transportation.",
        },
        {
          title: "Convenient Meal Options",
          description:
            "Renters can choose from a variety of pre-designed meal kits that cater to different dietary preferences and camping styles. These kits will include easy-to-follow recipes and all the necessary ingredients for hassle-free cooking at the campsite.",
        },
        {
          title: "Pre-Order and Delivery to Your Trailer",
          description:
            "Meal kits can be pre-ordered through the TowN'go platform during the booking process. In select locations, we will even offer convenient delivery of the meal kits directly to the renter's trailer upon arrival at their campsite or designated pick-up point.",
        },
        {
          title: "Enhancing the Culinary Camping Experience",
          description:
            "This partnership aims to enhance the culinary aspect of camping, allowing renters to enjoy delicious, locally-sourced meals without the hassle of extensive grocery shopping and meal planning. It's another way TowN'go is making outdoor adventures more enjoyable and convenient.",
        },
      ],
    },
    {
      id: 179317,
      date: "February 28, 2025",
      reading_duration: "7 min",
      title: "TowN'go Hosts Successful First Annual Community Campfire Event",
      subtitle: "Connecting renters and sharing outdoor experiences.",
      image: "/news/8.jpg",
      paragraphs: [
        {
          description:
            "TowN'go recently hosted its first annual Community Campfire Event, bringing together renters, local outdoor enthusiasts, and the TowN'go team for an evening of storytelling, music, and shared experiences under the stars. The event was a resounding success and fostered a strong sense of community among our users.",
        },
        {
          title: "Gathering Under the Stars",
          description:
            "The campfire event took place at a beautiful campground in the Laurentians and provided a relaxed and informal setting for people to connect, share their favorite camping stories, and build relationships with fellow outdoor adventurers.",
        },
        {
          title: "Live Music and Storytelling",
          description:
            "The evening featured live acoustic music from local artists and captivating storytelling sessions where attendees shared tales of their most memorable camping trips and discoveries made while exploring Quebec's natural beauty.",
        },
        {
          title: "Building the TowN'go Community",
          description:
            "This event was a key initiative in TowN'go's ongoing efforts to build a strong and supportive community around our rental service. We believe that sharing experiences and connecting with others who share a passion for the outdoors is an integral part of the adventure.",
        },
        {
          title: "Looking Forward to Future Events",
          description:
            "Due to the overwhelming positive feedback from attendees, TowN'go is already planning future community events and initiatives to continue fostering connections among our renters and celebrating the joy of outdoor exploration together. Stay tuned for announcements about upcoming gatherings!",
        },
      ],
    },
  ],
  team: [
    {
      name: "Ethan Miller",
      image: "public/ethan.jpg",
      position: "Co-Founder & CEO",
      presentation:
        "Ethan's vision drives TowN'go. A passionate outdoor enthusiast, he believes in making adventure accessible to everyone. He oversees the strategic direction and growth of the company.",
      linkedin: "#",
    },
    {
      name: "Caleb Davis",
      image: "public/caleb.jpg",
      position: "Head of Operations",
      presentation:
        "Caleb ensures the smooth running of TowN'go's day-to-day operations. With a keen eye for detail, he manages our trailer fleet and logistics to provide a seamless rental experience.",
      linkedin: "#",
    },
    {
      name: "Owen Wilson",
      image: "public/owen.jpg",
      position: "Marketing Manager",
      presentation:
        "Owen crafts the TowN'go story and connects with our community. He's passionate about sharing the joy of camping and ensuring everyone knows about the freedom our trailers offer.",
      linkedin: "#",
    },
    {
      name: "Samuel Taylor",
      image: "public/samuel.jpg",
      position: "Lead Developer",
      presentation:
        "Samuel leads the technical development of the TowN'go platform. He's dedicated to creating a user-friendly and efficient experience for finding and booking your perfect camping trailer.",
      linkedin: "#",
    },
  ],
  journeyData: [
    {
      date: "April 09, 2025",
      title: "Continuing the Adventure",
      description:
        "Building on the initial success and user feedback, TowN'go continues to evolve and expand its services. The focus remains on enhancing the platform, growing the community, and making camping trailer rentals even more accessible.",
    },
    {
      date: "April 01, 2025",
      title: "Soft Launch and Initial Feedback",
      description:
        "TowN'go entered its soft launch phase, allowing a limited group of users to test the platform and provide valuable feedback. This crucial stage helped identify areas for improvement and refinement before a wider release.",
    },
    {
      date: "February 20, 2025",
      title: "Building the First Connections",
      description:
        "Significant progress was made in developing the core functionalities of the TowN'go platform. Initial outreach to potential trailer owners and early adopter renters started to build the first connections within the community.",
    },
    {
      date: "December 01, 2024",
      title: "Laying the Foundation",
      description:
        "The foundational groundwork for the TowN'go platform began. This included initial market research, defining core features, and starting the early stages of design and development of the online service.",
    },
    {
      date: "October 15, 2024",
      title: "The Spark of an Idea",
      description:
        "The initial concept for TowN'go was born, fueled by a passion for outdoor adventures and the desire to simplify camping trailer rentals. Early discussions focused on creating a user-friendly platform connecting owners and renters.",
    },
  ],
  getArticle: (id: number) => {
    return get().news.find((article: any) => article.id === id);
  },
}));
