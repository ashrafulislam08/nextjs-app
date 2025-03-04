"use client";
import { useParams } from "next/navigation";

const CompanyDetail = () => {
  const { id } = useParams();
  [
    {
      id: 1,
      company_name: "Brain Station 23",
      services: ["Web Development", "Mobile Apps", "Enterprise Solutions"],
      company_logo: "https://via.placeholder.com/150?text=Brain+Station+23",
      description:
        "A leading software development company in Bangladesh, serving global clients with custom web, mobile, and enterprise solutions. Known for its technical expertise and innovative approach.",
    },
    {
      id: 2,
      company_name: "DataSoft Systems Bangladesh Ltd.",
      services: ["AI Solutions", "IoT Development", "R&D Projects"],
      company_logo: "https://via.placeholder.com/150?text=DataSoft",
      description:
        "Pioneers in AI, IoT, and cutting-edge software R&D. Collaborates with global tech giants to deliver transformative digital solutions.",
    },
    {
      id: 3,
      company_name: "TigerIT Bangladesh Ltd.",
      services: [
        "Biometric Systems",
        "Identity Management",
        "Government Projects",
      ],
      company_logo: "https://via.placeholder.com/150?text=TigerIT",
      description:
        "Specializes in biometric and national identity systems, playing a key role in Bangladesh's government digitalization projects.",
    },
    {
      id: 4,
      company_name: "Enosis Solutions",
      services: [
        "Software Development",
        "UX/UI Design",
        "International Clientele",
      ],
      company_logo: "https://via.placeholder.com/150?text=Enosis",
      description:
        "Focuses on delivering user-centric software solutions and design services for clients in the U.S., Europe, and beyond.",
    },
    {
      id: 5,
      company_name: "Cefalo",
      services: [
        "Agile Software",
        "Nordic Market Solutions",
        "Tech Talent Development",
      ],
      company_logo: "https://via.placeholder.com/150?text=Cefalo",
      description:
        "A trusted partner for Nordic companies, providing high-quality software development and nurturing top-tier tech talent.",
    },
    {
      id: 6,
      company_name: "Therap (BD) Ltd.",
      services: [
        "Healthcare Software",
        "HIPAA Compliance",
        "Developmental Disability Services",
      ],
      company_logo: "https://via.placeholder.com/150?text=Therap",
      description:
        "Provides HIPAA-compliant healthcare software for developmental disability support, widely adopted in the U.S. care sector.",
    },
    {
      id: 7,
      company_name: "Southtech Group",
      services: ["Fintech Solutions", "ERP Systems", "Digital Transformation"],
      company_logo: "https://via.placeholder.com/150?text=Southtech",
      description:
        "Drives financial and enterprise digital transformation with fintech products and ERP solutions for businesses across Asia.",
    },
    {
      id: 8,
      company_name: "Leads Corporation Limited",
      services: [
        "IT Infrastructure",
        "Telecom Solutions",
        "Government Digital Services",
      ],
      company_logo: "https://via.placeholder.com/150?text=Leads",
      description:
        "A key player in IT infrastructure and telecom solutions, supporting Bangladesh's government and private sector digitization.",
    },
    {
      id: 9,
      company_name: "SSL Wireless",
      services: ["Payment Gateways", "SMS Services", "Government e-Services"],
      company_logo: "https://via.placeholder.com/150?text=SSL+Wireless",
      description:
        "Facilitates digital payments and government e-services through secure payment gateways and SMS integration.",
    },
    {
      id: 10,
      company_name: "BJIT Ltd.",
      services: [
        "Offshore Development",
        "IT Outsourcing",
        "Product Engineering",
      ],
      company_logo: "https://via.placeholder.com/150?text=BJIT",
      description:
        "Offers offshore IT outsourcing and product engineering services to global clients, emphasizing innovation and scalability.",
    },
  ];
  const companies = [
    {
      id: 1,
      company_name: "Brain Station 23",
      services: ["Web Development", "Mobile Apps", "Enterprise Solutions"],
      company_logo: "https://via.placeholder.com/150?text=Brain+Station+23",
      description:
        "A leading software development company in Bangladesh, serving global clients with custom web, mobile, and enterprise solutions. Known for its technical expertise and innovative approach.",
    },
    {
      id: 2,
      company_name: "DataSoft Systems Bangladesh Ltd.",
      services: ["AI Solutions", "IoT Development", "R&D Projects"],
      company_logo: "https://via.placeholder.com/150?text=DataSoft",
      description:
        "Pioneers in AI, IoT, and cutting-edge software R&D. Collaborates with global tech giants to deliver transformative digital solutions.",
    },
    {
      id: 3,
      company_name: "TigerIT Bangladesh Ltd.",
      services: [
        "Biometric Systems",
        "Identity Management",
        "Government Projects",
      ],
      company_logo: "https://via.placeholder.com/150?text=TigerIT",
      description:
        "Specializes in biometric and national identity systems, playing a key role in Bangladesh's government digitalization projects.",
    },
    {
      id: 4,
      company_name: "Enosis Solutions",
      services: [
        "Software Development",
        "UX/UI Design",
        "International Clientele",
      ],
      company_logo: "https://via.placeholder.com/150?text=Enosis",
      description:
        "Focuses on delivering user-centric software solutions and design services for clients in the U.S., Europe, and beyond.",
    },
    {
      id: 5,
      company_name: "Cefalo",
      services: [
        "Agile Software",
        "Nordic Market Solutions",
        "Tech Talent Development",
      ],
      company_logo: "https://via.placeholder.com/150?text=Cefalo",
      description:
        "A trusted partner for Nordic companies, providing high-quality software development and nurturing top-tier tech talent.",
    },
    {
      id: 6,
      company_name: "Therap (BD) Ltd.",
      services: [
        "Healthcare Software",
        "HIPAA Compliance",
        "Developmental Disability Services",
      ],
      company_logo: "https://via.placeholder.com/150?text=Therap",
      description:
        "Provides HIPAA-compliant healthcare software for developmental disability support, widely adopted in the U.S. care sector.",
    },
    {
      id: 7,
      company_name: "Southtech Group",
      services: ["Fintech Solutions", "ERP Systems", "Digital Transformation"],
      company_logo: "https://via.placeholder.com/150?text=Southtech",
      description:
        "Drives financial and enterprise digital transformation with fintech products and ERP solutions for businesses across Asia.",
    },
    {
      id: 8,
      company_name: "Leads Corporation Limited",
      services: [
        "IT Infrastructure",
        "Telecom Solutions",
        "Government Digital Services",
      ],
      company_logo: "https://via.placeholder.com/150?text=Leads",
      description:
        "A key player in IT infrastructure and telecom solutions, supporting Bangladesh's government and private sector digitization.",
    },
    {
      id: 9,
      company_name: "SSL Wireless",
      services: ["Payment Gateways", "SMS Services", "Government e-Services"],
      company_logo: "https://via.placeholder.com/150?text=SSL+Wireless",
      description:
        "Facilitates digital payments and government e-services through secure payment gateways and SMS integration.",
    },
    {
      id: 10,
      company_name: "BJIT Ltd.",
      services: [
        "Offshore Development",
        "IT Outsourcing",
        "Product Engineering",
      ],
      company_logo: "https://via.placeholder.com/150?text=BJIT",
      description:
        "Offers offshore IT outsourcing and product engineering services to global clients, emphasizing innovation and scalability.",
    },
  ];

  const singleData = companies.find((company) => company.id == id);
  return (
    <div className="px-5">
      <h2 className="font-bold text-2xl">{singleData?.company_name}</h2>
      <p className="text-sm font-normal">{singleData?.description}</p>
      <div>
        <h4 className="font-bold text-lg mt-3">Services:</h4>
        <ul className="ml-8">
          {singleData?.services.map((service) => (
            <li className="list-disc">{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetail;
