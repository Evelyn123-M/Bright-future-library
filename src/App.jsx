import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  CalendarDays,
  Clock3,
  Computer,
  GraduationCap,
  Heart,
  MapPin,
  Menu,
  MoveUpRight,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import libraryBadge from "./assets/good-things-grow-here.png";
import libraryBooksPhoto from "./assets/bright-future-library-books.jpeg";

const navigation = [
  ["Home", "#home"],
  ["About us", "#about"],
  ["Services", "#services"],
  ["Events", "#events"],
  ["Featured books", "#books"],
  ["Contact us", "#contact"],
];

const services = [
  {
    number: "01",
    icon: BookOpenCheck,
    title: "Borrow & discover",
    description:
      "Take home your next favorite. Our friendly team can help you find, borrow, and renew books for every age.",
    link: "Explore our collection",
  },
  {
    number: "02",
    icon: Computer,
    title: "Get connected",
    description:
      "Use our free computers and high-speed internet for homework, job applications, research, and everything in between.",
    link: "Plan your visit",
  },
  {
    number: "03",
    icon: Heart,
    title: "Find your space",
    description:
      "Settle into a quiet study nook, meet a friend in our reading lounge, or find a welcoming corner for the little ones.",
    link: "See our spaces",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Learn together",
    description:
      "Build new skills through free literacy programs, creative workshops, tutoring, and community-led classes.",
    link: "Browse programs",
  },
];

const events = [
  {
    day: "24",
    month: "OCT",
    category: "FOR LITTLE READERS",
    title: "Saturday Story Circle",
    description:
      "Bring your best listening ears for a cozy morning of picture books, songs, and a little make-and-take craft.",
    time: "10:30 AM – 11:30 AM",
    place: "Children's reading room",
  },
  {
    day: "07",
    month: "NOV",
    category: "ALL AGES",
    title: "Pages & Possibilities",
    description:
      "Meet your neighbors, share what you're reading, and leave with a fresh book recommendation or two.",
    time: "2:00 PM – 3:30 PM",
    place: "The community lounge",
  },
];

const books = [
  {
    title: "The Very Secret Society of Irregular Witches",
    author: "Sangu Mandanna",
    description:
      "A lonely witch finds belonging, unexpected family, and a little magic in a cozy English home.",
    genre: "FICTION",
    cover: "cover-lilac",
    mark: "A little\nbit of magic",
  },
  {
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    description:
      "A grieving widow and a very clever octopus form an unlikely friendship in a moving story of hope.",
    genre: "BOOK CLUB FAVORITE",
    cover: "cover-coral",
    mark: "The sea\nremembers",
  },
  {
    title: "The Creative Act",
    author: "Rick Rubin",
    description:
      "A thoughtful guide to creativity and noticing the inspiration already around you.",
    genre: "INSPIRATION",
    cover: "cover-green",
    mark: "A way of\nbeing",
  },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#home">
      <span className="brand-mark" aria-hidden="true">
        <BookOpen size={22} strokeWidth={1.8} />
      </span>
      <span className="brand-name">
        <strong>bright future</strong>
        <span>COMMUNITY LIBRARY</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [contactForm, setContactForm] = useState({ fullName: "", email: "", message: "" });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleContactChange(event) {
    const { name, value } = event.target;
    setContactForm((currentForm) => ({ ...currentForm, [name]: value }));
    setContactErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setContactSubmitted(false);
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactForm.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }
    if (!contactForm.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!emailPattern.test(contactForm.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!contactForm.message.trim()) {
      errors.message = "Please enter a message.";
    }

    setContactErrors(errors);
    setContactSubmitted(Object.keys(errors).length === 0);
  }

  return (
    <>
      <header className="site-header" id="home">
        <div className="topline">
          <div className="container topline-inner">
            <span>A little more wonder, right around the corner.</span>
            <a href="#contact">
              <MapPin size={14} /> 18 Maple Street, Your Town
            </a>
          </div>
        </div>
        <div className="container nav-wrap">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Get a library card <ArrowRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><Sparkles size={14} /> YOUR COMMUNITY, YOUR LIBRARY</span>
              <h1>Big ideas.<br /><em>Bright futures.</em></h1>
              <p className="hero-lead">
                A place to read, learn, and feel at home. Come as you are—there's a little something here for everyone.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#about">
                  Come on in <ArrowRight size={17} />
                </a>
                <a className="text-link" href="#services">
                  See what you can do <ArrowDown size={15} />
                </a>
              </div>
              <div className="hero-note">
                <div className="avatar-stack" aria-hidden="true">
                  <span>J</span><span>M</span><span>A</span><span>+</span>
                </div>
                <p><strong>A welcoming space for everyone.</strong><br />Neighbors, readers, and dreamers alike.</p>
              </div>
            </div>
            <div className="hero-art">
              <img
                className="hero-photo"
                src={libraryBooksPhoto}
                alt="A stack of books in front of library bookshelves"
              />
              <div className="art-label"><BookOpen size={15} /> A good place to begin</div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>OPEN DOORS. OPEN MINDS.</span>
            <span className="hero-bottom-line" />
            <a href="#about">A library for all of us <ArrowDown size={14} /></a>
          </div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="container intro-grid">
            <div className="intro-stamp">
              <img src={libraryBadge} alt="Good things grow here" />
            </div>
            <div className="intro-copy">
              <span className="eyebrow">A LITTLE ABOUT US</span>
              <h2>More than books.<br /><em>A place to belong.</em></h2>
              <p>
                Bright Future Library is your neighborhood's shared living room: a warm, open place where curiosity is celebrated and everyone has room to grow.
              </p>
              <p>
                We believe access to stories, ideas, and one another can change a life. So we're bringing the community together, one page, one conversation, and one bright idea at a time.
              </p>
              <a className="text-link text-link-dark" href="#contact">
                Get to know your library <MoveUpRight size={15} />
              </a>
            </div>
            <div className="intro-stat">
              <span className="stat-number">A place<br />for <em>you.</em></span>
              <span className="stat-caption">Free to join. Open to everyone.</span>
              <span className="stat-line" />
              <span className="stat-note">READ · LEARN · CONNECT</span>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="services-head">
              <SectionHeading
                eyebrow="HERE FOR YOUR NEXT CHAPTER"
                title={<>A little help.<br /><em>A lot of possibility.</em></>}
                description="Whatever brings you through our doors, we're glad you're here."
              />
              <span className="services-decoration" aria-hidden="true">✳</span>
            </div>
            <div className="service-grid">
              {services.map(({ number, icon: Icon, title, description, link }) => (
                <article className="service-card" key={title}>
                  <div className="service-card-top"><span>{number}</span><Icon size={23} strokeWidth={1.7} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#contact">{link} <ArrowRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="events-section section-pad" id="events">
          <div className="container">
            <div className="events-heading-row">
              <SectionHeading
                eyebrow="SAVE A LITTLE TIME FOR US"
                title={<>Good things are<br /><em>on the calendar.</em></>}
                description="There's always something lovely happening at the library. Find your people, try something new, and come join us."
              />
              <a className="button button-outline" href="#contact">All events <ArrowRight size={16} /></a>
            </div>
            <div className="event-list">
              {events.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div>
                  <div className="event-details">
                    <span className="event-category">{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div className="event-meta">
                      <span><Clock3 size={14} /> {event.time}</span>
                      <span><MapPin size={14} /> {event.place}</span>
                    </div>
                  </div>
                  <a className="event-arrow" href="#contact" aria-label={`Ask about ${event.title}`}><ArrowRight size={20} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="books-section section-pad" id="books">
          <div className="container books-grid">
            <div className="books-intro">
              <span className="eyebrow"><BookOpen size={14} /> THE BOOKSHELF</span>
              <h2>Stories worth<br /><em>staying up for.</em></h2>
              <p>A few titles our team can't stop talking about. Your next favorite might be right here.</p>
              <a className="button button-primary" href="#contact">Find your next read <ArrowRight size={16} /></a>
              <div className="book-pagination"><span>01</span><i /><span>03</span><span className="book-pagination-note">STAFF PICKS</span></div>
            </div>
            <div className="book-cards">
              {books.map((book, index) => (
                <article className={`book-card book-card-${index + 1}`} key={book.title}>
                  <div className={`book-cover ${book.cover}`}>
                    <span className="cover-top">{book.genre}</span>
                    <span className="cover-art" aria-hidden="true">{book.mark.split("\n").map((line) => <i key={line}>{line}</i>)}</span>
                    <span className="cover-bottom">{book.title}</span>
                  </div>
                  <div className="book-info">
                    <span>{book.genre}</span>
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                    <p className="book-description">{book.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="container newsletter-inner">
            <div className="newsletter-copy">
              <span className="eyebrow">A GOOD THING IN YOUR INBOX</span>
              <h2>A little library love,<br /><em>now and then.</em></h2>
              <p>Get the good stuff: new books, upcoming events, and little things worth knowing.</p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email">Your email address</label>
              <div className="email-input">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  required
                />
                <button type="submit" aria-label="Subscribe to library updates"><ArrowRight size={19} /></button>
              </div>
              <p className="form-note" aria-live="polite">
                {subscribed ? "You're on the list—thanks for being here!" : "Just the good stuff. Unsubscribe whenever."}
              </p>
            </form>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="contact-info">
              <div>
                <span className="eyebrow">WE'LL SAVE YOU A SEAT</span>
                <h2>Come by.<br /><em>Say hello.</em></h2>
              </div>
              <div className="contact-details">
                <div><MapPin size={18} /><p><strong>Find us</strong><br />18 Maple Street, Your Town</p></div>
                <div><CalendarDays size={18} /><p><strong>We're open</strong><br />Mon–Fri, 9–6 · Sat, 10–4</p></div>
                <div><UsersRound size={18} /><p><strong>Call us</strong><br /><a href="tel:+15550142753">(555) 014-2753</a></p></div>
                <div><UsersRound size={18} /><p><strong>Email us</strong><br /><a href="mailto:hello@brightfuturelibrary.org">hello@brightfuturelibrary.org</a></p></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
              <h3>Send us a note</h3>
              <div className="form-field">
                <label htmlFor="contact-name">Full name</label>
                <input
                  id="contact-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={contactForm.fullName}
                  onChange={handleContactChange}
                  aria-invalid={Boolean(contactErrors.fullName)}
                  aria-describedby={contactErrors.fullName ? "contact-name-error" : undefined}
                />
                {contactErrors.fullName && <span className="field-error" id="contact-name-error">{contactErrors.fullName}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  aria-invalid={Boolean(contactErrors.email)}
                  aria-describedby={contactErrors.email ? "contact-email-error" : undefined}
                />
                {contactErrors.email && <span className="field-error" id="contact-email-error">{contactErrors.email}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  aria-invalid={Boolean(contactErrors.message)}
                  aria-describedby={contactErrors.message ? "contact-message-error" : undefined}
                />
                {contactErrors.message && <span className="field-error" id="contact-message-error">{contactErrors.message}</span>}
              </div>
              <div className="contact-form-footer">
                <button className="button button-primary" type="submit">Send message <ArrowRight size={16} /></button>
                <p className={contactSubmitted ? "contact-feedback is-success" : "contact-feedback"} aria-live="polite">
                  {contactSubmitted ? "Thanks for reaching out! Your message is ready for our team." : ""}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Brand footer />
          <p>Good things grow when we grow together.</p>
          <span>© 2026 Bright Future Library</span>
        </div>
      </footer>
    </>
  );
}

export default App;
