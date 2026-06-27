type NavItem = {
  label: string;
  href: string;
};

type TextCard = {
  title: string;
  description: string;
};

type Service = TextCard & {
  label: string;
};

type UseCase = TextCard & {
  imageLabel: string;
};

type ProcessStep = TextCard & {
  number: string;
};

type Project = TextCard & {
  category: string;
};

type Faq = {
  question: string;
  answer: string;
};

const navItems: NavItem[] = [
  { label: "ปัญหา", href: "#problem" },
  { label: "แนวทาง", href: "#solutions" },
  { label: "บริการ", href: "#services" },
  { label: "ขั้นตอน", href: "#process" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "ติดต่อ", href: "#contact" },
];

const heroMetrics = [
  {
    value: "สำรวจพื้นที่จริง",
    label: "ประเมินขนาดห้อง รูปแบบโต๊ะ และข้อจำกัดหน้างาน",
  },
  {
    value: "รองรับ Hybrid Meeting",
    label: "เชื่อมเสียงในห้องกับผู้เข้าร่วมออนไลน์ให้สื่อสารชัดเจน",
  },
  {
    value: "ส่งมอบพร้อมแนวทางดูแล",
    label: "สอนการใช้งานเบื้องต้น พร้อมข้อมูลสำหรับดูแลระบบต่อเนื่อง",
  },
];

const problems: TextCard[] = [
  {
    title: "เสียงพูดไม่ชัดในห้องและปลายทางออนไลน์",
    description:
      "ผู้เข้าประชุมได้ยินไม่เท่ากัน เสียงเบา หรือเสียงขาดช่วง ทำให้การสื่อสารระหว่างทีมไม่ต่อเนื่อง",
  },
  {
    title: "ไมค์หอน เสียงสะท้อน และเสียงรบกวน",
    description:
      "ปัญหาเสียงที่เกิดซ้ำระหว่างประชุมทำให้ต้องหยุดแก้ไขเฉพาะหน้า และลดความน่าเชื่อถือของห้องประชุม",
  },
  {
    title: "อุปกรณ์หลายระบบแต่ใช้งานร่วมกันไม่ราบรื่น",
    description:
      "ระบบเสียง จอภาพ ชุดนำเสนอ และ Video Conference ควรถูกวางให้ทำงานร่วมกันอย่างเป็นระบบ",
  },
  {
    title: "ผู้ใช้งานต้องพึ่งทีมเทคนิคบ่อยเกินไป",
    description:
      "ห้องประชุมที่ดีควรพร้อมใช้งานทุกวัน และเริ่มประชุมได้ง่ายโดยไม่ต้องตั้งค่าซับซ้อนทุกครั้ง",
  },
];

const solutionPoints: TextCard[] = [
  {
    title: "ประเมินจากสภาพห้องจริง",
    description:
      "พิจารณาขนาดห้อง รูปแบบโต๊ะ วัสดุผนัง ตำแหน่งผู้พูด และจำนวนผู้ใช้งานก่อนออกแบบระบบ",
  },
  {
    title: "เลือกอุปกรณ์ให้สอดคล้องกับการใช้งาน",
    description:
      "จัดชุดไมโครโฟน ลำโพง ชุดควบคุม และระบบประชุมออนไลน์ให้เหมาะกับรูปแบบการประชุมขององค์กร",
  },
  {
    title: "ทดสอบระบบก่อนส่งมอบ",
    description:
      "ตรวจระดับเสียง ความครอบคลุม การเชื่อมต่อ และแนะนำการใช้งานให้ทีมที่เกี่ยวข้อง",
  },
];

const services: Service[] = [
  {
    label: "Audio System",
    title: "ระบบเสียงห้องประชุม",
    description:
      "ออกแบบระบบเสียงให้ครอบคลุมพื้นที่ ลดเสียงสะท้อน และเหมาะกับลักษณะการใช้งานของห้อง",
  },
  {
    label: "Conference Mic",
    title: "ระบบไมโครโฟนประชุม",
    description:
      "วางตำแหน่งและเลือกไมโครโฟนประชุมให้เหมาะกับจำนวนผู้พูด รูปแบบโต๊ะ และขนาดห้อง",
  },
  {
    label: "Video Conference",
    title: "ระบบประชุมออนไลน์",
    description:
      "เชื่อมต่อกับ Zoom, Microsoft Teams, Google Meet และอุปกรณ์ประชุมที่องค์กรใช้อยู่",
  },
  {
    label: "AV Integration",
    title: "ระบบภาพและเสียง",
    description:
      "วางระบบเสียงร่วมกับจอภาพ ชุดนำเสนอ และอุปกรณ์ควบคุม เพื่อให้ผู้ใช้เริ่มประชุมได้สะดวก",
  },
  {
    label: "Training Space",
    title: "ห้องอบรมและห้องเรียน",
    description:
      "ออกแบบเสียงให้ครอบคลุมผู้ฟังหลายตำแหน่ง เหมาะกับการอบรม บรรยาย และการเรียนการสอน",
  },
  {
    label: "Executive Room",
    title: "ห้องประชุมผู้บริหาร",
    description:
      "จัดระบบให้เรียบร้อย ใช้งานมั่นใจ และเหมาะกับภาพลักษณ์ของห้องประชุมระดับผู้บริหาร",
  },
];

const useCases: UseCase[] = [
  {
    imageLabel: "[ใส่ภาพห้องประชุม]",
    title: "Meeting Room",
    description:
      "ห้องประชุมประจำวันสำหรับทีมงานที่ต้องการเสียงชัดและเริ่มประชุมได้รวดเร็ว",
  },
  {
    imageLabel: "[ใส่ภาพ Board Room]",
    title: "Board Room",
    description:
      "ห้องประชุมผู้บริหารที่ต้องการความเรียบร้อย ความน่าเชื่อถือ และการควบคุมที่ง่าย",
  },
  {
    imageLabel: "[ใส่ภาพ Training Room]",
    title: "Training Room",
    description:
      "ห้องอบรมหรือสัมมนาที่ต้องการเสียงครอบคลุมชัดเจนสำหรับผู้ฟังหลายตำแหน่ง",
  },
  {
    imageLabel: "[ใส่ภาพ Hybrid Meeting]",
    title: "Hybrid Meeting",
    description:
      "ห้องประชุมที่ต้องเชื่อมผู้เข้าร่วมในห้องกับผู้เข้าร่วมออนไลน์ให้สื่อสารได้ราบรื่น",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "รับโจทย์และข้อมูลเบื้องต้น",
    description:
      "เก็บข้อมูลขนาดห้อง จำนวนผู้ใช้งาน รูปแบบการประชุม และปัญหาของระบบเดิม",
  },
  {
    number: "02",
    title: "สำรวจพื้นที่หรือประเมินจากข้อมูลหน้างาน",
    description: "ตรวจตำแหน่งติดตั้ง ระบบไฟ การเดินสาย และข้อจำกัดของหน้างาน",
  },
  {
    number: "03",
    title: "ออกแบบระบบและจัดชุดอุปกรณ์",
    description:
      "วางตำแหน่งไมโครโฟน ลำโพง ชุดควบคุม และการเชื่อมต่อให้เหมาะกับการใช้งานจริง",
  },
  {
    number: "04",
    title: "เสนอราคาและขอบเขตงาน",
    description:
      "สรุปรายการอุปกรณ์ ขอบเขตการติดตั้ง และข้อมูลที่ต้องยืนยันก่อนเริ่มงาน",
  },
  {
    number: "05",
    title: "ติดตั้ง ทดสอบ และปรับจูนระบบ",
    description:
      "ติดตั้งอุปกรณ์ ทดสอบเสียง ทดสอบการประชุมออนไลน์ และตรวจความพร้อมก่อนส่งมอบ",
  },
  {
    number: "06",
    title: "ส่งมอบและแนะนำการใช้งาน",
    description:
      "แนะนำการใช้งานเบื้องต้น พร้อมแนวทางดูแลระบบและช่องทางติดต่อหลังส่งมอบ",
  },
];

const projects: Project[] = [
  {
    category: "Meeting Room",
    title: "ห้องประชุมองค์กร",
    description:
      "พื้นที่สำหรับใส่ภาพงานติดตั้งจริง พร้อมสรุปโจทย์ของห้องและระบบที่ใช้งาน",
  },
  {
    category: "Board Room",
    title: "ห้องประชุมผู้บริหาร",
    description:
      "พื้นที่สำหรับนำเสนองานที่เน้นความเรียบร้อย การควบคุมที่ง่าย และภาพลักษณ์องค์กร",
  },
  {
    category: "Training Room",
    title: "ห้องอบรมและสัมมนา",
    description:
      "พื้นที่สำหรับตัวอย่างห้องที่ต้องรองรับผู้ฟังหลายตำแหน่งและการนำเสนออย่างต่อเนื่อง",
  },
];

const faqs: Faq[] = [
  {
    question: "จำเป็นต้องสำรวจหน้างานก่อนเสนอราคาหรือไม่?",
    answer:
      "โดยทั่วไปควรสำรวจหน้างาน หรืออย่างน้อยควรมีข้อมูลขนาดห้อง รูปแบบโต๊ะ และจำนวนผู้ใช้งาน เพื่อให้ประเมินระบบได้ใกล้เคียงความต้องการจริง",
  },
  {
    question: "ใช้เวลาติดตั้งประมาณกี่วัน?",
    answer:
      "ระยะเวลาขึ้นอยู่กับขนาดห้อง ความซับซ้อนของการเดินสาย และจำนวนอุปกรณ์ รายละเอียดจริงสามารถระบุได้หลังประเมินพื้นที่และขอบเขตงาน",
  },
  {
    question: "รองรับ Zoom, Microsoft Teams และ Google Meet หรือไม่?",
    answer:
      "สามารถออกแบบให้รองรับการประชุมออนไลน์และ Hybrid Meeting ได้ โดยต้องตรวจสอบอุปกรณ์ปลายทางและรูปแบบการใช้งานขององค์กร",
  },
  {
    question: "สามารถออกแบบตามงบประมาณได้หรือไม่?",
    answer:
      "สามารถจัดลำดับความสำคัญของระบบตามงบประมาณ เช่น เริ่มจากระบบเสียงหลักก่อน แล้วค่อยขยายระบบภาพหรือระบบควบคุมภายหลัง",
  },
  {
    question: "มีบริการหลังการขายหรือรับประกันหรือไม่?",
    answer:
      "สามารถระบุรายละเอียดการรับประกัน การตรวจเช็ค และการดูแลหลังติดตั้งได้หลังยืนยันข้อมูลบริการจริงของบริษัท",
  },
];

const contactExpectations = [
  "ขนาดห้องหรือจำนวนที่นั่งโดยประมาณ",
  "ปัญหาเดิมหรือเป้าหมายของห้องประชุม",
  "แพลตฟอร์มประชุมออนไลน์ที่ใช้อยู่",
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="กลับไปด้านบน">
          <span className="brand-mark">AM</span>
          <span>
            <strong>[ชื่อบริษัท]</strong>
            <small>Audio Meeting Room</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="เมนูหลัก">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-primary header-cta" href="#contact">
          ขอใบเสนอราคา
        </a>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-band" id="top">
          <div className="hero">
            <div className="container hero-grid">
              <div className="hero-copy">
                <span className="eyebrow eyebrow-on-dark">
                  Premium Meeting Room Audio
                </span>
                <h1>
                  ออกแบบระบบเสียงห้องประชุมองค์กร ให้พร้อมใช้งานในทุกการประชุม
                </h1>
                <p>
                  วางระบบเสียง ไมโครโฟนประชุม และ Hybrid Meeting
                  ให้เหมาะกับพื้นที่จริง ใช้งานง่าย
                  และรองรับทั้งผู้เข้าประชุมในห้องและออนไลน์
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#contact">
                    ขอคำปรึกษา
                  </a>
                  <a className="button button-secondary" href="#services">
                    ดูบริการ
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="metrics-strip" aria-label="จุดเด่นบริการ">
            <div className="container hero-metrics">
              {heroMetrics.map((item) => (
                <article key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section problem-section" id="problem">
          <div className="container">
            <SectionHeading
              eyebrow="Problem"
              title="ปัญหาระบบเสียงที่ทำให้การประชุมไม่ราบรื่น"
              description="เสียงที่ไม่ชัด เสียงสะท้อน หรืออุปกรณ์ที่ใช้งานร่วมกันยาก อาจทำให้การประชุมเสียเวลาและส่งผลต่อภาพลักษณ์ขององค์กร"
            />
            <div className="card-grid card-grid-4">
              {problems.map((item) => (
                <article className="text-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section solution-section" id="solutions">
          <div className="container solution-grid">
            <div>
              <span className="eyebrow eyebrow-on-dark">Solution</span>
              <h2 className="stacked-heading">
                <span>ออกแบบระบบเสียง</span>
                <span>จากภาพรวมของห้องประชุม</span>
              </h2>
              <p>
                ประเมินพื้นที่ ระบบเสียง ระบบภาพ อุปกรณ์เดิม
                และรูปแบบการใช้งานร่วมกัน
                เพื่อให้ห้องประชุมพร้อมใช้งานจริงตั้งแต่วันส่งมอบ
              </p>
            </div>
            <div className="solution-list">
              {solutionPoints.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="Services"
              title="บริการระบบเสียงและระบบประชุมสำหรับองค์กร"
              description="ครอบคลุมตั้งแต่ห้องประชุมทั่วไป ห้องประชุมผู้บริหาร ห้องอบรม ไปจนถึงพื้นที่ประชุมแบบ Hybrid Meeting"
              align="center"
            />
            <div className="card-grid card-grid-3">
              {services.map((item) => (
                <article className="service-card" key={item.title}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section usecase-section">
          <div className="container">
            <SectionHeading
              eyebrow="Use Cases"
              title="โซลูชันสำหรับห้องประชุมหลายรูปแบบ"
              description="แต่ละพื้นที่มีเป้าหมาย จำนวนผู้ใช้งาน และข้อจำกัดต่างกัน ระบบจึงควรถูกออกแบบให้เหมาะกับห้องนั้นโดยเฉพาะ"
              align="center"
            />
            <div className="usecase-grid">
              {useCases.map((item) => (
                <article className="usecase-card" key={item.title}>
                  <div className="usecase-image">
                    <span>{item.imageLabel}</span>
                  </div>
                  <div className="usecase-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container process-layout">
            <SectionHeading
              eyebrow="Process"
              title="ขั้นตอนทำงานชัดเจนตั้งแต่สำรวจจนส่งมอบ"
              description="ช่วยให้ทีมจัดซื้อ ทีม IT และผู้อนุมัติโครงการเห็นภาพรวม ขอบเขตงาน และข้อมูลสำคัญก่อนเริ่มติดตั้ง"
            />
            <div className="process-list">
              {processSteps.map((step) => (
                <article className="process-card" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="container">
            <SectionHeading
              eyebrow="Portfolio"
              title="ตัวอย่างพื้นที่สำหรับนำเสนอผลงานติดตั้ง"
              description="รองรับการใส่ภาพผลงานจริง สรุปโจทย์ของห้อง ขอบเขตงาน และข้อมูลโครงการที่ได้รับอนุญาตให้เผยแพร่"
              align="center"
            />
            <div className="portfolio-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <span>{project.category}</span>
                    <strong>[ใส่รูปผลงานจริง]</strong>
                  </div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container trust-layout">
            <div>
              <span className="eyebrow">Client Trust</span>
              <h2>ความน่าเชื่อถือสำหรับลูกค้าองค์กร</h2>
              <p>
                พื้นที่นี้ออกแบบไว้สำหรับข้อมูลที่ตรวจสอบได้ เช่น โลโก้ลูกค้า
                ข้อความรับรอง หรือรายละเอียดโครงการที่ได้รับอนุญาตให้เผยแพร่
              </p>
            </div>
          </div>
          <div
            className="container logo-strip"
            aria-label="พื้นที่สำหรับโลโก้ลูกค้า"
          >
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index}>[LOGO]</span>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-grid">
            <SectionHeading
              eyebrow="FAQ"
              title="FAQ: คำถามที่พบบ่อยเกี่ยวกับระบบเสียงห้องประชุม"
              description="รวมคำถามเบื้องต้นเกี่ยวกับการสำรวจหน้างาน ระยะเวลาติดตั้ง การประชุมออนไลน์ และการดูแลหลังส่งมอบ"
            />
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-heading">
            <span className="eyebrow eyebrow-on-dark">Contact</span>
            <h2>เริ่มประเมินระบบเสียงสำหรับห้องประชุมของคุณ</h2>
            <p>
              ส่งข้อมูลเบื้องต้นเพื่อให้ทีมงานติดต่อกลับ พร้อมประเมินแนวทางระบบ
              ขนาดห้อง และข้อมูลที่จำเป็นสำหรับการเสนอราคา
            </p>
          </div>
          <div className="container contact-grid">
            <aside className="contact-panel">
              <h3>ข้อมูลที่ช่วยให้ประเมินระบบได้เร็วขึ้น</h3>
              <div className="contact-checklist">
                {contactExpectations.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="contact-channels">
                <strong>ช่องทางติดต่อ</strong>
                <span>[เบอร์โทรศัพท์]</span>
                <span>[ใส่ LINE Official Account]</span>
                <span>[อีเมลบริษัท]</span>
              </div>
            </aside>
            <form className="lead-form" aria-label="ฟอร์มขอคำปรึกษา">
              <label>
                ชื่อ-นามสกุล
                <input type="text" placeholder="เช่น คุณสมชาย ใจดี" />
              </label>
              <label>
                เบอร์โทรศัพท์
                <input type="tel" placeholder="[เบอร์โทรศัพท์]" />
              </label>
              <label>
                อีเมลสำหรับติดต่อ
                <input type="email" placeholder="name@example.com" />
              </label>
              <label>
                ประเภทห้องหรือจำนวนที่นั่ง
                <input type="text" placeholder="เช่น ห้องประชุม 20 ที่นั่ง" />
              </label>
              <label className="form-full">
                รายละเอียดปัญหาหรือความต้องการ
                <textarea
                  placeholder="เช่น ต้องการปรับปรุงเสียงประชุมออนไลน์ หรือวางระบบใหม่ทั้งห้อง"
                  rows={4}
                />
              </label>
              <button className="button button-accent form-full" type="button">
                ขอคำปรึกษา
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand brand-footer" href="#top">
              <span className="brand-mark">AM</span>
              <span>
                <strong>[ชื่อบริษัท]</strong>
                <small>Audio Meeting Room</small>
              </span>
            </a>
            <p>บริการออกแบบและติดตั้งระบบเสียงห้องประชุมสำหรับองค์กร</p>
          </div>
          <div>
            <h3>เมนู</h3>
            {navItems.slice(0, 5).map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h3>ติดต่อ</h3>
            <span>[เบอร์โทรศัพท์]</span>
            <span>[ใส่ LINE OA]</span>
            <span>[ใส่ที่อยู่บริษัท]</span>
          </div>
        </div>
        <div className="container footer-bottom">
          © 2026 [ชื่อบริษัท]. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
