import builderBuilderCover from '../../assets/Builder Builder/1.png';
import builderBuilderGallery2 from '../../assets/Builder Builder/2.png';
import builderBuilderGallery3 from '../../assets/Builder Builder/3.png';
import builderBuilderGallery4 from '../../assets/Builder Builder/4.png';
import builderBuilderGallery5 from '../../assets/Builder Builder/6.png';
import builderBuilderGallery6 from '../../assets/Builder Builder/ChatGPT Image Apr 24, 2026, 09_29_16 AM.png';

import athliixCover from '../../assets/Athliix/Group 1171276626.png';
import athliixGallery2 from '../../assets/Athliix/image 173.png';
import athliixGallery3 from '../../assets/Athliix/image 176.png';
import athliixGallery4 from '../../assets/Athliix/Rectangle 40389.png';
import athliixGallery5 from '../../assets/Athliix/Rectangle 40390.png';
import athliixGallery6 from '../../assets/Athliix/Rectangle 40391.png';
import athliixGallery7 from '../../assets/Athliix/Rectangle 40393.png';
import athliixGallery8 from '../../assets/Athliix/Rectangle 40394.png';

import doxafarCover from '../../assets/Doxafer/petcare.png';
import doxafarGallery1 from '../../assets/Doxafer/Group 1171276611.png';
import doxafarGallery2 from '../../assets/Doxafer/image 116.png';
import doxafarGallery3 from '../../assets/Doxafer/image 117.png';
import doxafarGallery4 from '../../assets/Doxafer/image 118.png';
import doxafarGallery5 from '../../assets/Doxafer/image 159.png';
import doxafarGallery6 from '../../assets/Doxafer/image 160.png';
import doxafarGallery7 from '../../assets/Doxafer/image 170.png';
import doxafarGallery8 from '../../assets/Doxafer/image 171.png';

import fleetHubCover from '../../assets/Fleet hub/Cover image.png';
import fleetHubGallery2 from '../../assets/Fleet hub/1.png';
import fleetHubGallery3 from '../../assets/Fleet hub/2.png';
import fleetHubGallery4 from '../../assets/Fleet hub/3.png';
import fleetHubGallery5 from '../../assets/Fleet hub/4.png';
import fleetHubGallery6 from '../../assets/Fleet hub/5.png';
import fleetHubGallery7 from '../../assets/Fleet hub/6.png';

import gxTicketsCover from '../../assets/GX Tickets/Cover Image.png';
import gxTicketsGallery2 from '../../assets/GX Tickets/1.png';
import gxTicketsGallery3 from '../../assets/GX Tickets/2.png';
import gxTicketsGallery4 from '../../assets/GX Tickets/3.png';
import gxTicketsGallery5 from '../../assets/GX Tickets/4.png';
import gxTicketsGallery6 from '../../assets/GX Tickets/5.png';
import gxTicketsGallery7 from '../../assets/GX Tickets/6.png';

import heatriqCover from '../../assets/Heatrics/cover img.png';
import heatriqGallery2 from '../../assets/Heatrics/1.png';
import heatriqGallery3 from '../../assets/Heatrics/2.png';
import heatriqGallery4 from '../../assets/Heatrics/3.png';
import heatriqGallery5 from '../../assets/Heatrics/4.png';
import heatriqGallery6 from '../../assets/Heatrics/5.png';
import heatriqGallery7 from '../../assets/Heatrics/6.png';

import mediMinderCover from '../../assets/medi minder/medi minder.png';
import mediMinderGallery2 from '../../assets/medi minder/Group 1171276627.png';
import mediMinderGallery3 from '../../assets/medi minder/image 179.png';
import mediMinderGallery4 from '../../assets/medi minder/image 180.png';
import mediMinderGallery5 from '../../assets/medi minder/image 181.png';
import mediMinderGallery6 from '../../assets/medi minder/image 183.png';

import projecXCover from '../../assets/ProjexX/cover page projecx.png';
import projecXGallery2 from '../../assets/ProjexX/1.png';
import projecXGallery3 from '../../assets/ProjexX/2.png';
import projecXGallery4 from '../../assets/ProjexX/3.png';
import projecXGallery5 from '../../assets/ProjexX/4.png';
import projecXGallery6 from '../../assets/ProjexX/5.png';
import projecXGallery7 from '../../assets/ProjexX/6.png';

import vanguardCover from '../../assets/Vanguard/cove img vanguard.png';
import vanguardGallery2 from '../../assets/Vanguard/1.png';
import vanguardGallery3 from '../../assets/Vanguard/2.png';
import vanguardGallery4 from '../../assets/Vanguard/3.png';
import vanguardGallery5 from '../../assets/Vanguard/4.png';
import vanguardGallery6 from '../../assets/Vanguard/5.png';
import vanguardGallery7 from '../../assets/Vanguard/6.png';

import vivastCover from '../../assets/Vivast/Cover image design.png';
import vivastGallery2 from '../../assets/Vivast/1.png';
import vivastGallery3 from '../../assets/Vivast/2.png';
import vivastGallery4 from '../../assets/Vivast/3.png';
import vivastGallery5 from '../../assets/Vivast/4.png';
import vivastGallery6 from '../../assets/Vivast/5.png';
import vivastGallery7 from '../../assets/Vivast/6.png';

export interface Project {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
  url: string;
  // Detailed project page content
  details?: {
    heroTitle: string;
    heroSubtitle: string;
    meta: {
      client: string;
      role: string;
      timeline: string;
      year: string;
      scope: string;
    };
    overview: {
      heading: string;
      paragraphs: string[];
      image: string;
    };
    tags: string[];
    challenge: {
      title: string;
      paragraphs: string[];
    };
    process: {
      steps: Array<{
        step: string;
        title: string;
        body: string;
      }>;
    };
    solution: {
      heading: string;
      paragraphs: string[];
      image: string;
    };
    results: Array<{
      stat: string;
      label: string;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      authorRole: string;
      initials: string;
    };
    gallery?: Array<{
      src: string;
      alt: string;
    }>;
    designSystemImages?: Array<{
      src: string;
      alt: string;
    }>;
  };
}

export const serviceProjects: Record<string, Project[]> = {
  'Automation & AI': [
    {
      id: 1,
      title: 'AI Voice Receptionist',
      genre: 'Automation & AI',
      description: 'Intelligent front desk, powered by voice.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'AI Voice Receptionist',
        heroSubtitle: 'Conversational Voice AI system designed for healthcare clinics and professional spaces to handle incoming calls, automate bookings, and manage inquiries in real time.',
        meta: {
          client: 'TechManufacturing Inc.',
          role: 'Lead AI Engineer',
          timeline: '14 Weeks',
          year: '2024',
          scope: 'Voice AI · Healthcare Solution · Automation System · Dashboard'
        },
        overview: {
          heading: 'Intelligent call handling that never misses a patient.',
          paragraphs: [
            'AI Voice Receptionist is a conversational AI system designed for healthcare clinics and professional spaces to handle incoming calls, automate bookings, and manage inquiries in real time.',
            'It reduces front-desk workload, improves response times during peak hours, and creates a consistent caller experience through natural, human-like conversations.'
          ],
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80'
        },
        tags: ['Voice AI', 'Automation', 'Healthcare', 'Conversational Flows', 'Scheduling', 'Dashboard'],
        challenge: {
          title: 'Missed calls, overloaded staff, and manual appointment handling during peak hours.',
          paragraphs: [
            'Clinics often miss calls during busy periods and rely on manual booking flows, which creates delays and an inconsistent response experience.',
            'The solution needed to stay available 24/7, respond instantly to common inquiries, and sync scheduling without requiring manual input.'
          ]
        },
        process: {
          steps: [
            {
              step: '01',
              title: 'Discovery & Audit',
              body: 'Call flow analysis, clinic workflows, and user pain points to define what the AI should capture, confirm, and escalate.'
            },
            {
              step: '02',
              title: 'Strategy & Positioning',
              body: 'Defined direction: “Always available. Always responsive.” Designed a human-like interaction model with clear confirmations.'
            },
            {
              step: '03',
              title: 'System Design',
              body: 'Designed conversational flows, AI logic, and dashboard integration patterns for real-time scheduling.'
            }
          ]
        },
        solution: {
          heading: 'A voice-first receptionist that books, answers, and syncs in real time.',
          paragraphs: [
            'The system handles incoming calls 24/7 with natural, human-like conversations, identifying caller intent instantly and extracting key details (name, preferred time, reason).',
            'Bookings are confirmed in-call and synced to the scheduling system immediately, while the admin dashboard provides live conversation tracking and operational visibility.'
          ],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
        },
        results: [
          { stat: '24/7', label: 'availability for automated call handling' },
          { stat: '↓', label: 'front-desk workload via booking automation' },
          { stat: '↑', label: 'caller experience with instant responses' },
          { stat: 'Live', label: 'conversation tracking via admin dashboard' }
        ],
        testimonial: {
          quote: 'Octathorn didn\'t just install sensors — they built us a nervous system. Our operators went from reactive firefighting to proactive optimization. We\'re now seeing defects before they happen.',
          author: 'Sarah Mitchell',
          authorRole: 'VP of Operations, TechManufacturing Inc.',
          initials: 'SM'
        }
      }
    },
    {
      id: 2,
      title: 'Automation Bot Dashboard',
      genre: 'Automation & AI',
      description: 'Centralized control for intelligent workflows.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'Automation Bot Dashboard',
        heroSubtitle: 'Centralized system to monitor, manage, and control multiple automated workflows (bots) in real time — enabling teams to operate a scalable digital workforce efficiently.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'Automation System · Web Dashboard · AI Workflows · Admin Panel'
        },
        overview: {
          heading: 'Automation with full visibility and control.',
          paragraphs: [
            'Automation Bot Dashboard provides a unified view of bot health, status, versions, and runtime environments — reducing manual oversight and improving reliability.',
            'The system combines monitoring, run controls, attachments/logs access, and collaboration feedback loops to keep workflows accurate and continuously improving.'
          ],
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80'
        },
        tags: ['Automation', 'Dashboard', 'Workflows', 'Monitoring', 'Admin Panel', 'Collaboration'],
        challenge: {
          title: 'Managing multiple bots without centralized visibility leads to inefficiency and errors.',
          paragraphs: [
            'Organizations struggled with monitoring bot performance, tracking errors, and coordinating updates across teams.',
            'The platform needed a clear grid-based UI and structured metrics that reveal system health instantly while supporting search, filtering, and task-specific controls.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Mapped automation workflows, system gaps, and use cases across operations and admin teams.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Automation with full visibility and control” with transparency and reliability as key outcomes.' },
            { step: '03', title: 'Design System', body: 'Designed grid-based dashboards, modular cards, and real-time indicators for scalable bot management.' }
          ]
        },
        solution: {
          heading: 'A single command center for the automation ecosystem.',
          paragraphs: [
            'The dashboard surfaces system overview metrics (total bots, active, approved/passed, dev, not approved) and enables run controls, status indicators, and version tracking per bot.',
            'Collaboration features connect medical/doctor feedback with developer feedback, ensuring accuracy and continuous improvement across workflows.'
          ],
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80'
        },
        results: [
          { stat: 'Live', label: 'status visibility across all bots' },
          { stat: '↓', label: 'manual monitoring effort' },
          { stat: '↑', label: 'workflow reliability through centralized control' },
          { stat: 'Faster', label: 'team collaboration & iteration loops' }
        ]
      }
    },
    {
      id: 3,
      title: 'Medical Paperwork Automation',
      genre: 'Automation & AI',
      description: 'From paper chaos to intelligent clarity.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'Medical Paperwork Automation',
        heroSubtitle: 'AI-powered system that converts handwritten medical documents into structured, searchable digital records using OCR and contextual extraction — eliminating manual entry and streamlining workflows.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'AI OCR · Healthcare System · Data Extraction · Web Portal'
        },
        overview: {
          heading: 'Transforming paper into intelligent data.',
          paragraphs: [
            'Medical Paperwork Automation digitizes handwritten prescriptions, notes, and forms into secure, searchable records — reducing delays and error risk.',
            'A minimal portal supports fast review, filtering, and status tracking (completed, pending, in review) to keep operations moving.'
          ],
          image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80'
        },
        tags: ['AI OCR', 'Healthcare', 'Data Extraction', 'Portal', 'Automation', 'Search'],
        challenge: {
          title: 'Manual data entry, illegible handwriting, and slow access to patient information.',
          paragraphs: [
            'Healthcare teams spend time retyping handwritten records and correcting errors caused by unclear notes.',
            'The system needed accuracy, speed, and secure handling while keeping the interface minimal and highly readable.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Studied paper-based workflows, bottlenecks, and error points in document handling.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Transforming paper into intelligent data” with a data-first portal experience.' },
            { step: '03', title: 'System Design', body: 'Designed an AI OCR engine, structured extraction layers, and clean UI for status + search.' }
          ]
        },
        solution: {
          heading: 'Accurate OCR + smart extraction + fast retrieval.',
          paragraphs: [
            'The system reads complex handwriting, extracts patients/diagnoses/medications contextually, and stores results securely for instant retrieval.',
            'A portal workflow supports rapid search and filtering, reducing operational delays and enabling a smooth transition to paperless processes.'
          ],
          image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80'
        },
        results: [
          { stat: '↓', label: 'manual entry delays' },
          { stat: '↓', label: 'human error risk in transcription' },
          { stat: 'Faster', label: 'access to patient data' },
          { stat: '↑', label: 'workflow efficiency' }
        ]
      }
    },
    {
      id: 4,
      title: 'Kadima Security Services',
      genre: 'Automation & AI',
      description: 'Secure operations. Intelligent control.',
      image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'Kadima Security Services',
        heroSubtitle: 'Security workflow automation platform for the defence sector enabling centralized monitoring, secure communication, and streamlined operational control across sensitive environments.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'Security Platform · Web App · Workflow Automation · Admin System'
        },
        overview: {
          heading: 'Maximum security with seamless control.',
          paragraphs: [
            'Kadima centralizes security workflows into a structured dashboard experience that supports monitoring, encrypted data handling, and role-based access.',
            'It is designed to reduce manual processes while improving real-time visibility and operational decision-making in high-security environments.'
          ],
          image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1200&q=80'
        },
        tags: ['Security', 'Workflow Automation', 'Admin System', 'Monitoring', 'Access Control', 'Secure Communication'],
        challenge: {
          title: 'Disconnected monitoring systems and manual, error-prone workflows create security gaps.',
          paragraphs: [
            'Security operations often lack centralized visibility and rely on manual processes that increase risk in sensitive environments.',
            'The platform needed high clarity UI, scalable workflows, and robust access control while minimizing distractions.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Reviewed security workflows, compliance needs, and operational gaps across roles.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Maximum security with seamless control” balancing visibility and strict access constraints.' },
            { step: '03', title: 'Design System', body: 'Designed a secure dashboard-first system with structured modules and scalable workflows.' }
          ]
        },
        solution: {
          heading: 'Centralized monitoring, encrypted workflows, and controlled access.',
          paragraphs: [
            'Kadima enables real-time monitoring, secure data management, encrypted video communication, and workflow automation for streamlined operations.',
            'Key modules include a dashboard, data management, communication, automation engine, and access control system for permissions and roles.'
          ],
          image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1200&q=80'
        },
        results: [
          { stat: '↑', label: 'real-time visibility across operations' },
          { stat: '↓', label: 'manual workload' },
          { stat: 'Faster', label: 'response and decision-making' },
          { stat: '↑', label: 'data protection & control' }
        ]
      }
    },
    { id: 5, title: 'Natural Language Processing', genre: 'Automation & AI', description: 'AI chatbot & text analysis engine',     image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80', url: '#' },
    { id: 6, title: 'AI-Driven Analytics Platform', genre: 'Automation & AI', description: 'Business intelligence automation',      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', url: '#' },
  ],
  'Hardware': [
    {
      id: 1,
      title: 'Public Announcement Device',
      genre: 'Hardware',
      description: 'Clear communication. Automated precision.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'Public Announcement Device',
        heroSubtitle: 'Hardware-based audio communication system designed to deliver clear announcements along with an automated Azaan scheduling system.',
        meta: {
          client: 'SmartCity Initiative',
          role: 'Hardware Lead',
          timeline: '18 Weeks',
          year: '2024',
          scope: 'Hardware Device · IoT System · Audio Communication · Embedded System'
        },
        overview: {
          heading: 'Automated communication with reliable audio delivery.',
          paragraphs: [
            'Public Announcement Device is a hardware-based audio communication system designed to deliver clear announcements along with an automated Azaan scheduling system.',
            'It enables automated playback at preset times, manual announcements for alerts, and wireless control for configuration and updates.'
          ],
          image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=1200&q=80'
        },
        tags: ['Embedded Systems', 'IoT', 'WiFi', 'Audio', 'Automation', 'Scheduling'],
        challenge: {
          title: 'Manual repeated announcements, inconsistent scheduling, and poor audio clarity at scale.',
          paragraphs: [
            'Organizations often rely on manual operations for repeated announcements and face inconsistency in scheduling critical broadcasts.',
            'The system needed to be durable, easy to configure, and capable of remote monitoring/control to reduce manual intervention.'
          ]
        },
        process: {
          steps: [
            {
              step: '01',
              title: 'Discovery & Audit',
              body: 'Assessed communication needs, audio coverage challenges, and scheduling gaps to define the end-to-end system behavior.'
            },
            {
              step: '02',
              title: 'Strategy & Positioning',
              body: 'Defined direction: “Automated communication with reliable audio delivery” with clear on-device status and simple remote configuration.'
            },
            {
              step: '03',
              title: 'System Design',
              body: 'Designed embedded scheduling logic, WiFi connectivity, and audio processing modules with LED-based monitoring.'
            }
          ]
        },
        solution: {
          heading: 'Automated Azaan scheduling + manual announcement mode, with wireless control.',
          paragraphs: [
            'The system supports automated playback at preset times and manual announcements for real-time alerts and messaging.',
            'WiFi connectivity enables remote configuration and status visibility, improving reliability and reducing manual operational overhead.'
          ],
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&q=80'
        },
        results: [
          { stat: 'Auto', label: 'preset scheduling for consistent operation' },
          { stat: 'Manual', label: 'real-time announcements for alerts/messages' },
          { stat: 'WiFi', label: 'remote configuration and control' },
          { stat: 'Clear', label: 'high-quality audio coverage' }
        ],
        testimonial: {
          quote: 'Octathorn delivered hardware that just works. A year in, we haven\'t replaced a single battery. The data quality is incredible, and the nodes have survived everything from heatwaves to ice storms.',
          author: 'Dr. James Chen',
          authorRole: 'Director of Urban Analytics, SmartCity Initiative',
          initials: 'JC'
        }
      }
    },
    { id: 2, title: 'Jammer Testing Device',   genre: 'Hardware',       description: 'Precision RF testing. Reliable validation.',          image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80', url: '#' },
    { id: 3, title: 'People Counter',     genre: 'Hardware',       description: 'Smart counting. Real-time tracking.',    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&q=80', url: '#' },
    { id: 4, title: 'Red Strength',     genre: 'Hardware',       description: 'Intelligent heating control.', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1200&q=80', url: '#' },
    {
      id: 5,
      title: 'Vanguard',
      genre: 'Hardware',
      description: 'Load monitoring with control.',
      image: vanguardCover,
      url: '#',
      details: {
        heroTitle: 'Vanguard',
        heroSubtitle: 'IoT device that monitors multiple AC loads with a web dashboard for detailed reporting and remote on/off control.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'Hardware Device · IoT Monitoring · Control System · Web Integration'
        },
        overview: {
          heading: 'Real-time load visibility with actionable control.',
          paragraphs: [
            'Vanguard provides centralized monitoring for multiple AC loads with monthly reporting and remote control capabilities via a website.',
            'The system is designed to improve energy management by combining real-time monitoring, reporting, and control in one workflow.'
          ],
          image: vanguardCover
        },
        tags: ['IoT', 'Monitoring', 'Control', 'Web Dashboard', 'Reporting', 'Energy'],
        challenge: {
          title: 'No centralized load monitoring, limited control, and missing reporting.',
          paragraphs: [
            'Without a unified view, teams struggle to understand load behavior and act quickly when issues occur.',
            'The system needed to provide real-time monitoring, remote control, and structured monthly reporting.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Assessed load monitoring gaps and reporting needs for industrial and facility workflows.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Real-time load visibility and control” with clear reporting outputs.' },
            { step: '03', title: 'System Design', body: 'Designed an IoT-based monitoring architecture with web dashboard integration and remote control patterns.' }
          ]
        },
        solution: {
          heading: 'Monitor, report, and control loads from one dashboard.',
          paragraphs: [
            'Vanguard enables live load monitoring, remote on/off control, and monthly reporting via a web dashboard.',
            'The experience is data-first and built for reliability in industrial monitoring scenarios.'
          ],
          image: vanguardCover
        },
        results: [
          { stat: 'Live', label: 'load monitoring visibility' },
          { stat: 'Remote', label: 'control of loads via web' },
          { stat: 'Monthly', label: 'reporting for analysis' },
          { stat: '↑', label: 'energy management efficiency' }
        ],
        gallery: [
          { src: vanguardCover, alt: 'Vanguard — Cover' },
          { src: vanguardGallery2, alt: 'Vanguard — Screen 1' },
          { src: vanguardGallery3, alt: 'Vanguard — Screen 2' },
          { src: vanguardGallery4, alt: 'Vanguard — Screen 3' },
          { src: vanguardGallery5, alt: 'Vanguard — Screen 4' },
          { src: vanguardGallery6, alt: 'Vanguard — Screen 5' },
          { src: vanguardGallery7, alt: 'Vanguard — Screen 6' }
        ],
        designSystemImages: [
          { src: vanguardCover, alt: 'Vanguard — Design system 1' },
          { src: vanguardGallery2, alt: 'Vanguard — Design system 2' },
          { src: vanguardGallery3, alt: 'Vanguard — Design system 3' }
        ]
      }
    },
    { id: 6, title: 'Lift Services',  genre: 'Hardware',       description: 'Smart lift control system.',             image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', url: '#' },
  ],
  'PCBs': [
    {
      id: 1,
      title: 'IoT Sensor Board',
      genre: 'PCBs',
      description: 'Low-power environmental sensor node',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'IoT Sensor Board',
        heroSubtitle: 'Ultra-compact 4-layer PCB design featuring nRF52840 Bluetooth 5.0 SoC, multi-sensor array, and power management optimized for coin cell operation with 3+ year battery life.',
        meta: {
          client: 'GreenTech Solutions',
          role: 'PCB Design Lead',
          timeline: '8 Weeks',
          year: '2024',
          scope: 'Schematic · Layout · Manufacturing'
        },
        overview: {
          heading: 'Precision engineering in 40mm × 25mm.',
          paragraphs: [
            'GreenTech needed a production-ready sensor board that could fit inside existing product enclosures while adding environmental monitoring capabilities. The design had to be RF-certified, cost-effective at 10k+ volume, and assembled entirely with JLCPCB parts.',
            'We delivered a 4-layer PCB with controlled impedance traces for the 2.4GHz radio, integrated sensors for temperature/humidity/pressure, and a buck-boost converter enabling operation from 1.8V to 3.6V — critical for maximizing battery life as the coin cell discharges.'
          ],
          image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1200&q=80'
        },
        tags: ['PCB Design', 'Altium Designer', 'Bluetooth 5.0', 'RF Engineering', 'DFM', 'Power Management'],
        challenge: {
          title: 'Fit RF antenna, 5 sensors, and power circuitry in 40mm × 25mm with FCC/CE compliance.',
          paragraphs: [
            'The board had to coexist with a coin cell battery in a 12mm-tall enclosure. Every millimeter mattered. The Bluetooth antenna needed a proper ground plane and keepout area, but space was so tight we couldn\'t use a chip antenna — we had to route a PCB trace antenna.',
            'Manufacturing yield was critical at high volume. We needed to avoid BGAs (difficult to inspect), use only JLCPCB basic parts (for economic assembly), and ensure the design could survive reflow without warping or tombstoning tiny 0402 passives.'
          ]
        },
        process: {
          steps: [
            {
              step: '01',
              title: 'Component Selection & Footprints',
              body: 'Chose nRF52840 in QFN package (not BGA) for assemblability. Verified every part was JLCPCB basic stock. Created custom footprints for sensors with paste stencil optimizations to prevent solder bridging.'
            },
            {
              step: '02',
              title: 'RF Layout & Stack-up',
              body: 'Defined 4-layer stack-up with dedicated ground planes. Routed 50Ω meandered monopole antenna with proper ground clearance. Ran HFSS simulations to validate antenna performance before ordering prototypes.'
            },
            {
              step: '03',
              title: 'DFM & Manufacturing',
              body: 'Applied teardrops, 45° trace angles, and 6mil clearances. Generated Gerbers, drill files, and assembly BOM. First prototype batch passed FCC pre-compliance testing without modifications.'
            }
          ]
        },
        solution: {
          heading: 'A tiny board that punches above its weight.',
          paragraphs: [
            'The final design packs an nRF52840, BME680 environmental sensor, LIS2DH12 accelerometer, voltage regulator, and battery management into 10 cm². The PCB trace antenna achieves -2.5dBi gain — sufficient for 50m range indoors.',
            'Power consumption averages 12µA in sleep mode, spiking to 8mA during 100ms Bluetooth advertising bursts every 5 seconds. At this duty cycle, a CR2032 coin cell lasts 3.2 years of continuous operation.'
          ],
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&q=80'
        },
        results: [
          { stat: '10cm²', label: 'total board area — 35% smaller than client\'s original spec' },
          { stat: '98.7%', label: 'first-pass assembly yield across 5,000 unit production run' },
          { stat: '$4.20', label: 'per-unit BOM cost at 10k volume (target was $6.00)' },
          { stat: 'FCC/CE', label: 'certified on first submission with zero design changes' }
        ],
        testimonial: {
          quote: 'Octathorn\'s PCB engineering is world-class. They anticipated manufacturing issues we didn\'t even know existed. The board went into production with zero spins — unheard of in our industry.',
          author: 'Michael Rodriguez',
          authorRole: 'CTO, GreenTech Solutions',
          initials: 'MR'
        }
      }
    },
    { id: 2, title: 'Motor Controller PCB',        genre: 'PCBs',           description: 'High-current brushless driver',          image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1200&q=80', url: '#' },
    { id: 3, title: 'Power Management Unit',       genre: 'PCBs',           description: 'Multi-rail switching regulator',         image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&q=80', url: '#' },
    { id: 4, title: 'Bluetooth Audio Module',      genre: 'PCBs',           description: 'BLE 5.0 stereo audio board',             image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80', url: '#' },
    { id: 5, title: 'LED Driver Circuit',          genre: 'PCBs',           description: 'Constant-current RGB driver array',      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80', url: '#' },
    { id: 6, title: 'Raspberry Pi Shield',         genre: 'PCBs',           description: 'Custom HAT for industrial use',          image: 'https://images.unsplash.com/photo-1561489401-fc2876ced162?w=1200&q=80', url: '#' },
  ],
  'Web development': [
    {
      id: 1,
      title: 'FleetHub',
      genre: 'Web Dev',
      description: 'Smart fleet management made simple.',
      image: fleetHubCover,
      url: '#',
      details: {
        heroTitle: 'FleetHub',
        heroSubtitle: 'Comprehensive fleet management platform enabling organizations to monitor, manage, and optimize vehicle operations through real-time tracking and intelligent analytics.',
        meta: {
          client: 'RetailConnect',
          role: 'Lead Full-Stack Engineer',
          timeline: '16 Weeks',
          year: '2024',
          scope: 'Fleet Management · SaaS Platform · Web Dashboard · Analytics System'
        },
        overview: {
          heading: 'Data-driven fleet intelligence, centralized in one dashboard.',
          paragraphs: [
            'FleetHub is a comprehensive fleet management platform that enables organizations to monitor, manage, and optimize vehicle operations through real-time tracking and intelligent analytics.',
            'It supports centralized control, optimized routing and scheduling, fuel and maintenance tracking, and a reporting layer that improves operational decision-making.'
          ],
          image: fleetHubCover
        },
        tags: ['SaaS', 'Web Dashboard', 'Maps', 'Analytics', 'Fleet Tracking', 'Scheduling'],
        challenge: {
          title: 'No real-time fleet visibility, inefficient route planning, and high operational costs.',
          paragraphs: [
            'Organizations struggled with fragmented tools and lacked a centralized way to track vehicles, drivers, fuel, and maintenance.',
            'The platform needed to unify operations with real-time tracking, smart scheduling, and analytics to reduce delays and cost overhead.'
          ]
        },
        process: {
          steps: [
            {
              step: '01',
              title: 'Discovery & Audit',
              body: 'Reviewed fleet workflows, tracking gaps, and operational inefficiencies to define modules and KPI reporting needs.'
            },
            {
              step: '02',
              title: 'Strategy & Positioning',
              body: 'Defined direction: “Data-driven fleet intelligence” with a map-first dashboard and centralized control.'
            },
            {
              step: '03',
              title: 'Design System',
              body: 'Built a dashboard-first UI with map integration, scalable analytics components, and clear hierarchy for operational teams.'
            }
          ]
        },
        solution: {
          heading: 'Real-time tracking + analytics + workflows, unified.',
          paragraphs: [
            'FleetHub provides live GPS tracking, route optimization, driver and vehicle management, fuel analytics, and maintenance scheduling with alerts and service history.',
            'The experience is designed to be map-first and data-driven, enabling faster decisions and centralized operational control.'
          ],
          image: fleetHubCover
        },
        results: [
          { stat: '10K+', label: 'vehicles managed (impact snapshot)' },
          { stat: '99%', label: 'uptime reliability (impact snapshot)' },
          { stat: 'Up to 30%', label: 'route optimization improvement (impact snapshot)' },
          { stat: '↓', label: 'operational costs via centralized visibility' }
        ],
        gallery: [
          { src: fleetHubCover, alt: 'FleetHub — Cover' },
          { src: fleetHubGallery2, alt: 'FleetHub — Screen 1' },
          { src: fleetHubGallery3, alt: 'FleetHub — Screen 2' },
          { src: fleetHubGallery4, alt: 'FleetHub — Screen 3' },
          { src: fleetHubGallery5, alt: 'FleetHub — Screen 4' },
          { src: fleetHubGallery6, alt: 'FleetHub — Screen 5' },
          { src: fleetHubGallery7, alt: 'FleetHub — Screen 6' }
        ],
        designSystemImages: [
          { src: fleetHubCover, alt: 'FleetHub — Design system 1' },
          { src: fleetHubGallery2, alt: 'FleetHub — Design system 2' },
          { src: fleetHubGallery3, alt: 'FleetHub — Design system 3' }
        ],
        testimonial: {
          quote: 'Octathorn turned an impossible deadline into a flawless launch. The new platform handled Black Friday traffic that would have crashed our old site ten times over. Our vendors are thrilled with the performance.',
          author: 'Amanda Foster',
          authorRole: 'CEO, RetailConnect',
          initials: 'AF'
        }
      }
    },
    {
      id: 2,
      title: 'GX Tickets',
      genre: 'Web Dev',
      description: 'Premium ticketing. Seamless experiences.',
      image: gxTicketsCover,
      url: '#',
      details: {
        heroTitle: 'GX Tickets',
        heroSubtitle: 'SaaS-based ticketing platform designed to simplify event management while delivering a smooth booking experience with real-time analytics and scalable system design.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'SaaS Platform · Web & Mobile · UI/UX · Event Management'
        },
        overview: {
          heading: 'Clarity meets control in modern event management.',
          paragraphs: [
            'GX Tickets combines premium UI with structured flows that make event setup fast and user booking frictionless.',
            'It supports end-to-end event management, ticketing analytics, secure payments, QR-based check-ins, and marketing tools — all within a consistent design system.'
          ],
          image: gxTicketsCover
        },
        tags: ['SaaS', 'Ticketing', 'Event Management', 'Analytics', 'Payments', 'Design System'],
        challenge: {
          title: 'Fragmented tools, complex setup workflows, and limited visibility into performance.',
          paragraphs: [
            'Event organizers often rely on disconnected platforms for setup, payments, and reporting, creating inefficiency and slow onboarding.',
            'The goal was to design a simple, premium experience that scales across web and mobile while keeping analytics and operational controls accessible.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Mapped user journeys, competitor platforms, and workflow gaps for event setup and attendee booking.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Clarity meets control in event management” with premium UI inspired by Stripe & Linear.' },
            { step: '03', title: 'Design System', body: 'Built a scalable system for web + mobile including dashboards, analytics patterns, and booking flows.' }
          ]
        },
        solution: {
          heading: 'A ticketing platform that feels premium, fast, and reliable.',
          paragraphs: [
            'GX Tickets enables end-to-end event creation and management with real-time analytics for sales, revenue, and audience insights.',
            'Secure payments, smart ticketing (QR codes), marketing tools, and 24/7 customer support combine to deliver a seamless organizer + attendee experience.'
          ],
          image: gxTicketsCover
        },
        results: [
          { stat: '5,000+', label: 'organizations supported (impact)' },
          { stat: '4.8★', label: 'user rating (impact)' },
          { stat: '2K+', label: 'events launched (impact)' },
          { stat: '40%', label: 'increase in sales (impact)' }
        ],
        gallery: [
          { src: gxTicketsCover, alt: 'GX Tickets — Cover' },
          { src: gxTicketsGallery2, alt: 'GX Tickets — Screen 1' },
          { src: gxTicketsGallery3, alt: 'GX Tickets — Screen 2' },
          { src: gxTicketsGallery4, alt: 'GX Tickets — Screen 3' },
          { src: gxTicketsGallery5, alt: 'GX Tickets — Screen 4' },
          { src: gxTicketsGallery6, alt: 'GX Tickets — Screen 5' },
          { src: gxTicketsGallery7, alt: 'GX Tickets — Screen 6' }
        ],
        designSystemImages: [
          { src: gxTicketsCover, alt: 'GX Tickets — Design system 1' },
          { src: gxTicketsGallery2, alt: 'GX Tickets — Design system 2' },
          { src: gxTicketsGallery3, alt: 'GX Tickets — Design system 3' }
        ]
      }
    },
    {
      id: 3,
      title: 'VIvast',
      genre: 'Web Dev',
      description: 'Smart fitness management, simplified.',
      image: vivastCover,
      url: '#',
      details: {
        heroTitle: 'VIvast',
        heroSubtitle: 'All-in-one gym and fitness management platform that centralizes member management, billing, check-ins, POS, and analytics into a single system.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'SaaS Platform · Web App · Fitness Management · Dashboard'
        },
        overview: {
          heading: 'All-in-one control for modern fitness businesses.',
          paragraphs: [
            'VIvast unifies daily gym operations — from member profiles and check-ins to billing, invoicing, POS, and staff workflows.',
            'A dashboard-first UI makes key business metrics visible and supports faster, more reliable decision-making for owners and operations teams.'
          ],
          image: vivastCover
        },
        tags: ['Fitness SaaS', 'Dashboard', 'Billing', 'POS', 'Check-ins', 'Analytics'],
        challenge: {
          title: 'Fragmented tools, manual processes, and limited real-time business insight.',
          paragraphs: [
            'Gyms often rely on multiple tools across membership, payments, and attendance — leading to inefficiency and time loss.',
            'The product needed to centralize workflows and make performance transparent without increasing operational complexity.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Studied gym workflows, operational gaps, and user pain points across staff and management roles.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “All-in-one control for modern fitness businesses” with fast, structured workflows.' },
            { step: '03', title: 'Design System', body: 'Built a scalable UI system with strong hierarchy and responsive dashboard patterns.' }
          ]
        },
        solution: {
          heading: 'Operations, billing, and analytics — unified.',
          paragraphs: [
            'VIvast supports member management, biometric check-ins, automated billing & invoicing, POS, staff scheduling, and analytics dashboards.',
            'Key modules include check-in systems, invoice management, staff roles, and configurable settings/add-ons for different gym needs.'
          ],
          image: vivastCover
        },
        results: [
          { stat: '100%', label: 'unified operations (impact)' },
          { stat: '80%', label: 'time saved (impact)' },
          { stat: 'Live', label: 'real-time analytics enabled (impact)' },
          { stat: '↓', label: 'manual workload across staff (impact)' }
        ],
        gallery: [
          { src: vivastCover, alt: 'VIvast — Cover' },
          { src: vivastGallery2, alt: 'VIvast — Screen 1' },
          { src: vivastGallery3, alt: 'VIvast — Screen 2' },
          { src: vivastGallery4, alt: 'VIvast — Screen 3' },
          { src: vivastGallery5, alt: 'VIvast — Screen 4' },
          { src: vivastGallery6, alt: 'VIvast — Screen 5' },
          { src: vivastGallery7, alt: 'VIvast — Screen 6' }
        ],
        designSystemImages: [
          { src: vivastCover, alt: 'VIvast — Design system 1' },
          { src: vivastGallery2, alt: 'VIvast — Design system 2' },
          { src: vivastGallery3, alt: 'VIvast — Design system 3' }
        ]
      }
    },
    {
      id: 4,
      title: 'ProjecX',
      genre: 'Web Dev',
      description: 'Manage projects. Simplify work.',
      image: projecXCover,
      url: '#',
      details: {
        heroTitle: 'ProjecX',
        heroSubtitle: 'All-in-one project management platform designed to help teams collaborate, track progress, and deliver projects efficiently across web and mobile.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'SaaS Platform · Web & Mobile · Project Management · Collaboration'
        },
        overview: {
          heading: 'One platform for complete project control.',
          paragraphs: [
            'ProjecX centralizes tasks, collaboration, and progress tracking so teams can plan, execute, and analyze delivery without switching tools.',
            'The experience is minimal and high-contrast with scalable components that work consistently across web, mobile, and tablet.'
          ],
          image: projecXCover
        },
        tags: ['Project Management', 'Collaboration', 'SaaS', 'Analytics', 'Notifications', 'Cross-platform'],
        challenge: {
          title: 'Fragmented communication and poor visibility into progress causes delays and missed updates.',
          paragraphs: [
            'Teams struggle when tasks and conversations are split across multiple tools, creating confusion and lost context.',
            'The platform needed to provide a clear workflow from creation to completion, with progress visibility and smart notifications.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Mapped team workflows, collaboration gaps, and productivity challenges across different team types.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “One platform for complete project control” with collaboration-first interactions.' },
            { step: '03', title: 'Design System', body: 'Created a scalable, minimal UI foundation across devices with consistent hierarchy.' }
          ]
        },
        solution: {
          heading: 'Collaboration + task control + insight, together.',
          paragraphs: [
            'ProjecX supports task management, team chat/comments, file sharing, dashboards, performance insights, and reporting.',
            'A simple workflow (Create → Assign → Track → Complete & Analyze) keeps teams aligned and reduces missed updates.'
          ],
          image: projecXCover
        },
        results: [
          { stat: '10K+', label: 'active teams (impact)' },
          { stat: '50K+', label: 'projects completed (impact)' },
          { stat: '98%', label: 'customer satisfaction (impact)' },
          { stat: '↑', label: 'productivity through visibility (impact)' }
        ],
        gallery: [
          { src: projecXCover, alt: 'ProjecX — Cover' },
          { src: projecXGallery2, alt: 'ProjecX — Screen 1' },
          { src: projecXGallery3, alt: 'ProjecX — Screen 2' },
          { src: projecXGallery4, alt: 'ProjecX — Screen 3' },
          { src: projecXGallery5, alt: 'ProjecX — Screen 4' },
          { src: projecXGallery6, alt: 'ProjecX — Screen 5' },
          { src: projecXGallery7, alt: 'ProjecX — Screen 6' }
        ],
        designSystemImages: [
          { src: projecXCover, alt: 'ProjecX — Design system 1' },
          { src: projecXGallery2, alt: 'ProjecX — Design system 2' },
          { src: projecXGallery3, alt: 'ProjecX — Design system 3' }
        ]
      }
    },
    {
      id: 5,
      title: 'Builder Builder Pro',
      genre: 'Web Dev',
      description: 'Smarter construction. Better control.',
      image: builderBuilderCover,
      url: '#',
      details: {
        heroTitle: 'Builder Builder Pro',
        heroSubtitle: 'Construction management platform that streamlines planning, collaboration, and cost tracking through modern dashboard workflows across web and mobile.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'SaaS Platform · Web & Mobile · Construction Management · Dashboard'
        },
        overview: {
          heading: 'Built for precision, powered by simplicity.',
          paragraphs: [
            'Builder Builder Pro brings real-world construction workflows into a clean digital system for planning, collaboration, and cost/invoice tracking.',
            'A dashboard-first approach improves visibility for managers, contractors, and field teams with mobile-first usability on site.'
          ],
          image: builderBuilderCover
        },
        tags: ['Construction', 'Project Dashboard', 'Collaboration', 'Invoices', 'Mobile-first', 'SaaS'],
        challenge: {
          title: 'Disconnected planning and tracking leads to delays, budget overruns, and poor visibility.',
          paragraphs: [
            'Construction teams often manage tasks, costs, and communication in separate tools, making progress hard to track in real time.',
            'The platform needed structured dashboards and efficient workflows for both office and on-site teams.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Reviewed construction workflows, coordination gaps, and cost tracking issues across stakeholders.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Built for precision, powered by simplicity” with clear visibility into progress and cost.' },
            { step: '03', title: 'Design System', body: 'Designed dashboard patterns and mobile-responsive components for field usage.' }
          ]
        },
        solution: {
          heading: 'Planning, cost, and collaboration — centralized.',
          paragraphs: [
            'Core features include project dashboards, task & team management, real-time collaboration, invoice generation and tracking, and secure controlled access.',
            'The system supports scalable workflows for projects of any size while keeping decision-making fast through clear reporting.'
          ],
          image: builderBuilderCover
        },
        results: [
          { stat: '↑', label: 'project visibility' },
          { stat: '↓', label: 'delays and cost overruns' },
          { stat: '↑', label: 'team coordination' },
          { stat: 'Faster', label: 'decision-making through dashboards' }
        ],
        gallery: [
          { src: builderBuilderCover, alt: 'Builder Builder — Screen 1' },
          { src: builderBuilderGallery2, alt: 'Builder Builder — Screen 2' },
          { src: builderBuilderGallery3, alt: 'Builder Builder — Screen 3' },
          { src: builderBuilderGallery4, alt: 'Builder Builder — Screen 4' },
          { src: builderBuilderGallery5, alt: 'Builder Builder — Screen 5' },
          { src: builderBuilderGallery6, alt: 'Builder Builder — Screen 6' }
        ],
        designSystemImages: [
          { src: builderBuilderCover, alt: 'Builder Builder — Design system 1' },
          { src: builderBuilderGallery2, alt: 'Builder Builder — Design system 2' },
          { src: builderBuilderGallery3, alt: 'Builder Builder — Design system 3' },
          { src: builderBuilderGallery4, alt: 'Builder Builder — Design system 4' },
          { src: builderBuilderGallery5, alt: 'Builder Builder — Design system 5' },
          { src: builderBuilderGallery6, alt: 'Builder Builder — Design system 6' }
        ]
      }
    },
    {
      id: 6,
      title: 'CircuitHub',
      genre: 'Web Dev',
      description: 'Smart electronics shopping, simplified.',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'CircuitHub',
        heroSubtitle: 'Modern e-commerce platform for electronics delivering a fast shopping experience and powerful admin tools for product and order management.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'E-commerce Platform · Web App · Admin Dashboard'
        },
        overview: {
          heading: 'Fast, structured, and scalable e-commerce.',
          paragraphs: [
            'CircuitHub improves product browsing and discovery with responsive UI, structured collections, and efficient navigation.',
            'On the admin side, it supports product, customer, inventory, and order workflows to reduce operational friction.'
          ],
          image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80'
        },
        tags: ['E-commerce', 'Admin Dashboard', 'Inventory', 'Collections', 'Responsive UI', 'Performance'],
        challenge: {
          title: 'Slow storefronts and complex admin workflows reduce conversion and operational efficiency.',
          paragraphs: [
            'Electronics catalogs are large and require clear organization — without it, users struggle to find what they need.',
            'The platform needed fast performance and a management experience that keeps orders and inventory easy to track.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Studied shopping behavior, admin workflows, and performance gaps across key screens.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Fast, structured, and scalable e-commerce” with clarity-first navigation.' },
            { step: '03', title: 'Design System', body: 'Created a clean UI foundation and admin patterns for catalog and orders management.' }
          ]
        },
        solution: {
          heading: 'A storefront that stays fast — and an admin that stays clear.',
          paragraphs: [
            'CircuitHub provides product management, collections, order tracking, customer management, and responsive experiences across devices.',
            'The structure supports scalable catalogs and consistent operational control through a dashboard-first admin system.'
          ],
          image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80'
        },
        results: [
          { stat: '↑', label: 'shopping clarity and discovery' },
          { stat: '↓', label: 'admin friction for orders/inventory' },
          { stat: 'Fast', label: 'responsive performance across devices' },
          { stat: 'Scalable', label: 'catalog structure for growth' }
        ]
      }
    },
  ],
  'Mobile development': [
    {
      id: 1,
      title: 'Doxafar',
      genre: 'Mobile Dev',
      description: 'Smart care for healthier pets.',
      image: doxafarCover,
      url: '#',
      details: {
        heroTitle: 'Doxafar',
        heroSubtitle: 'Pet health monitoring mobile application designed to help owners track, manage, and improve the well-being of their pets.',
        meta: {
          client: 'FitLife Technologies',
          role: 'Lead Mobile Engineer',
          timeline: '12 Weeks',
          year: '2024',
          scope: 'Mobile App · IoT Integration · Pet Health · Monitoring System'
        },
        overview: {
          heading: 'Connected care for smarter pet health.',
          paragraphs: [
            'Doxafar combines real-time health tracking, environmental monitoring, and smart device control into a single, easy-to-use platform.',
            'It helps owners respond faster to health issues with alerts and centralizes pet data to simplify daily care routines.'
          ],
          image: doxafarCover
        },
        tags: ['Mobile App', 'IoT Integration', 'Bluetooth', 'Monitoring', 'Notifications', 'Pet Care'],
        challenge: {
          title: 'Lack of real-time monitoring, scattered pet care information, and delayed response to health issues.',
          paragraphs: [
            'Pet owners needed a simple way to track health conditions and maintain optimal environments without relying on manual checks.',
            'The experience needed real-time visibility, clear controls for connected devices, and notifications that support proactive care.'
          ]
        },
        process: {
          steps: [
            {
              step: '01',
              title: 'Discovery & Audit',
              body: 'Reviewed pet care routines, monitoring gaps, and device integration needs to define dashboards and alert triggers.'
            },
            {
              step: '02',
              title: 'Strategy & Positioning',
              body: 'Defined direction: “Connected care for smarter pet health” with a clean, friendly UI and real-time data clarity.'
            },
            {
              step: '03',
              title: 'Design System',
              body: 'Created scalable components for monitoring states, device controls, and alert/notification patterns.'
            }
          ]
        },
        solution: {
          heading: 'Real-time monitoring + device control in one place.',
          paragraphs: [
            'The platform supports pet profiles, real-time monitoring dashboards, Bluetooth-based device control, and alerts to enable proactive care.',
            'A built-in newsfeed and integrated shop support ongoing guidance and supplies browsing within the same ecosystem.'
          ],
          image: doxafarCover
        },
        results: [
          { stat: '↑', label: 'pet health monitoring consistency' },
          { stat: '↑', label: 'environmental control visibility' },
          { stat: '↓', label: 'response time to issues via alerts' },
          { stat: '1', label: 'centralized pet care experience' }
        ],
        gallery: [
          { src: doxafarCover, alt: 'Doxafar — Cover' },
          { src: doxafarGallery1, alt: 'Doxafar — Screen 1' },
          { src: doxafarGallery2, alt: 'Doxafar — Screen 2' },
          { src: doxafarGallery3, alt: 'Doxafar — Screen 3' },
          { src: doxafarGallery4, alt: 'Doxafar — Screen 4' },
          { src: doxafarGallery5, alt: 'Doxafar — Screen 5' },
          { src: doxafarGallery6, alt: 'Doxafar — Screen 6' },
          { src: doxafarGallery7, alt: 'Doxafar — Screen 7' },
          { src: doxafarGallery8, alt: 'Doxafar — Screen 8' }
        ],
        designSystemImages: [
          { src: doxafarCover, alt: 'Doxafar — Design system 1' },
          { src: doxafarGallery2, alt: 'Doxafar — Design system 2' },
          { src: doxafarGallery3, alt: 'Doxafar — Design system 3' }
        ],
        testimonial: {
          quote: 'Octathorn delivered an app that rivals the big players. The AI coaching feels genuinely personal, and users constantly tell us the app "just works" — the highest compliment for any mobile product.',
          author: 'David Park',
          authorRole: 'Founder & CEO, FitLife Technologies',
          initials: 'DP'
        }
      }
    },
    {
      id: 2,
      title: 'MediMinder',
      genre: 'Mobile Dev',
      description: 'Never miss a dose.',
      image: mediMinderCover,
      url: '#',
      details: {
        heroTitle: 'MediMinder',
        heroSubtitle: 'Medication management mobile app designed to improve adherence through smart reminders, tracking, and device integration.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'Mobile App · Healthcare · Medication Tracking · IoT Integration'
        },
        overview: {
          heading: 'Simple, reliable medication management.',
          paragraphs: [
            'MediMinder helps patients follow complex medication schedules with reminders, tracking, and clear daily dashboards.',
            'It supports stock monitoring and connected-device syncing to keep adherence reliable and reduce missed or incorrect doses.'
          ],
          image: mediMinderCover
        },
        tags: ['Healthcare', 'Reminders', 'Medication Tracking', 'IoT', 'Dark Mode', 'Accessibility'],
        challenge: {
          title: 'Missed doses, complex schedules, and poor visibility of medication usage and stock.',
          paragraphs: [
            'Patients and caregivers struggle to stay consistent, especially with multiple medications and timings.',
            'The solution needed to be minimal, highly readable, and reliable in notifications without adding friction.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Studied patient routines, adherence challenges, and device usage patterns.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Simple, reliable medication management” with clarity-first UI.' },
            { step: '03', title: 'Design System', body: 'Created scalable components for reminders, tracking states, and accessibility-friendly flows.' }
          ]
        },
        solution: {
          heading: 'Reminders + tracking + stock visibility, in one flow.',
          paragraphs: [
            'Core features include medication organization, smart reminders with sound/vibration, Bluetooth-based device integration, dark mode, and stock monitoring.',
            'The mobile experience centers on a daily dashboard that makes schedules and actions obvious at a glance.'
          ],
          image: mediMinderCover
        },
        results: [
          { stat: '↑', label: 'medication adherence' },
          { stat: '↓', label: 'missed doses' },
          { stat: '↑', label: 'daily routine consistency' },
          { stat: 'Clear', label: 'visibility into stock and schedules' }
        ],
        gallery: [
          { src: mediMinderCover, alt: 'MediMinder — Cover' },
          { src: mediMinderGallery2, alt: 'MediMinder — Screen 1' },
          { src: mediMinderGallery3, alt: 'MediMinder — Screen 2' },
          { src: mediMinderGallery4, alt: 'MediMinder — Screen 3' },
          { src: mediMinderGallery5, alt: 'MediMinder — Screen 4' },
          { src: mediMinderGallery6, alt: 'MediMinder — Screen 5' }
        ],
        designSystemImages: [
          { src: mediMinderCover, alt: 'MediMinder — Design system 1' },
          { src: mediMinderGallery3, alt: 'MediMinder — Design system 2' },
          { src: mediMinderGallery4, alt: 'MediMinder — Design system 3' }
        ]
      }
    },
    {
      id: 3,
      title: 'Athliix',
      genre: 'Mobile Dev',
      description: 'Fitness, gamified.',
      image: athliixCover,
      url: '#',
      details: {
        heroTitle: 'Athliix',
        heroSubtitle: 'Gamified fitness app that transforms workouts into interactive challenges with competition, rewards, and personalized training — built to motivate consistency.',
        meta: {
          client: 'AIX Team',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'Mobile App · Fitness Platform · Gamification · Social Experience'
        },
        overview: {
          heading: 'Make fitness competitive, fun, and rewarding.',
          paragraphs: [
            'Athliix motivates users by combining workouts with real-time challenges, leaderboards, rewards, and social interaction.',
            'The design approach focuses on energetic visuals, clear progress, and a social-first experience that reduces boredom and increases engagement.'
          ],
          image: athliixCover
        },
        tags: ['Fitness', 'Gamification', 'Leaderboards', 'Rewards', 'Social', 'Progress Tracking'],
        challenge: {
          title: 'Low motivation and boring routines lead to inconsistent workouts and slow progress.',
          paragraphs: [
            'Many users struggle with repetitive workouts and lack real-time engagement or competition.',
            'The app needed to make progress feel visible and workouts feel interactive, without complicating the core flow.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Studied motivation patterns, fitness habits, and engagement gaps across different user segments.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Make fitness competitive, fun, and rewarding” with social and challenge mechanics.' },
            { step: '03', title: 'Design System', body: 'Built an energetic UI system with gamified elements, clear progress visuals, and social flows.' }
          ]
        },
        solution: {
          heading: 'Challenges, progress, and rewards — designed for consistency.',
          paragraphs: [
            'Athliix includes personalized workouts, live challenges, leaderboards, progress tracking, and rewards/badges for milestones.',
            'A mobile-first experience keeps competition and motivation accessible through real-time notifications and social interaction.'
          ],
          image: athliixCover
        },
        results: [
          { stat: '↑', label: 'user engagement through competition' },
          { stat: '↑', label: 'workout consistency' },
          { stat: 'Stronger', label: 'motivation via rewards' },
          { stat: 'Clear', label: 'progress visibility' }
        ],
        gallery: [
          { src: athliixCover, alt: 'Athliix — Cover' },
          { src: athliixGallery2, alt: 'Athliix — Screen 1' },
          { src: athliixGallery3, alt: 'Athliix — Screen 2' },
          { src: athliixGallery4, alt: 'Athliix — Screen 3' },
          { src: athliixGallery5, alt: 'Athliix — Screen 4' },
          { src: athliixGallery6, alt: 'Athliix — Screen 5' },
          { src: athliixGallery7, alt: 'Athliix — Screen 6' },
          { src: athliixGallery8, alt: 'Athliix — Screen 7' }
        ],
        designSystemImages: [
          { src: athliixCover, alt: 'Athliix — Design system 1' },
          { src: athliixGallery4, alt: 'Athliix — Design system 2' },
          { src: athliixGallery5, alt: 'Athliix — Design system 3' }
        ]
      }
    },
    { id: 4, title: 'Finance Manager',             genre: 'Mobile Dev',     description: 'Personal budget & investment app',       image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80', url: '#' },
    { id: 5, title: 'AR Navigation App',           genre: 'Mobile Dev',     description: 'Augmented reality wayfinding',           image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=80', url: '#' },
    { id: 6, title: 'Healthcare Monitor',          genre: 'Mobile Dev',     description: 'Patient vitals & appointment app',       image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80', url: '#' },
  ],
  'Product design': [
    {
      id: 1,
      title: 'Smart Home Device',
      genre: 'Product Design',
      description: 'IoT consumer product design',
      image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'Smart Home Hub',
        heroSubtitle: 'Next-generation smart home controller combining voice control, gesture recognition, and ambient intelligence in a minimalist form factor designed to blend seamlessly into modern living spaces.',
        meta: {
          client: 'HomeSphere',
          role: 'Lead Product Designer',
          timeline: '20 Weeks',
          year: '2024',
          scope: 'Industrial Design · UX · Prototyping'
        },
        overview: {
          heading: 'Invisible technology, visible magic.',
          paragraphs: [
            'HomeSphere approached Octathorn with a vision: create a smart home hub that people actually want on their coffee table. Existing products were either utilitarian black boxes or gimmicky gadgets — nothing felt like furniture.',
            'We designed a sculptural object that doubles as ambient lighting, using fabric-wrapped acoustics for warm sound, touch-sensitive controls hidden in the seamless surface, and a built-in privacy shutter that physically disconnects the camera when not in use.'
          ],
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80'
        },
        tags: ['Industrial Design', 'UX Design', 'Prototyping', 'CMF', 'Manufacturing', 'IoT'],
        challenge: {
          title: 'Make a camera-equipped device that doesn\'t feel like surveillance.',
          paragraphs: [
            'The hub needed a camera for gesture control and video calls, but focus groups unanimously rejected always-on cameras in living rooms. We needed a physical privacy mechanism users could trust — not just a software toggle.',
            'Manufacturing constraints were brutal: the fabric wrap had to survive assembly without fraying, the touch surface needed IP54 water resistance, and the entire product had to hit a $149 retail price point while feeling premium enough to justify the cost.'
          ]
        },
        process: {
          steps: [
            {
              step: '01',
              title: 'Concept Development & User Research',
              body: 'Conducted in-home interviews with 40 families to understand smart home pain points. Sketched 50+ concepts, narrowed to 3 directions, and built foam models for tactile evaluation and living room placement testing.'
            },
            {
              step: '02',
              title: 'Prototyping & Engineering',
              body: 'Built functional prototypes with 3D-printed enclosures, custom PCBs, and speaker tuning. Tested fabric wrapping techniques with 12 material combinations. Developed a mechanical shutter that clicks satisfyingly when activated.'
            },
            {
              step: '03',
              title: 'Manufacturing & Production',
              body: 'Worked with CM in Shenzhen to refine DFM. Optimized part count from 47 to 23 components, reducing assembly time by 60%. Conducted drop tests, thermal testing, and FCC certification — passing all on first submission.'
            }
          ]
        },
        solution: {
          heading: 'A device that disappears until you need it.',
          paragraphs: [
            'The final design is a 12cm cylinder wrapped in acoustically transparent fabric, available in six colors to match any interior. Touch-sensitive zones on top control volume and lighting — no visible buttons. The LED ring glows subtly when listening, dims during calls, and pulses gently with music.',
            'A physical slider on the back simultaneously covers the camera lens and cuts power to the microphone array — users can see and feel the privacy mechanism engage. The base is weighted with recycled steel, giving it a satisfying heft that says "quality."'
          ],
          image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80'
        },
        results: [
          { stat: '4.7★', label: 'average customer rating on Amazon with 8,500+ reviews' },
          { stat: '50k+', label: 'units sold in first 90 days after launch' },
          { stat: '92%', label: 'users report using privacy shutter regularly (industry first)' },
          { stat: 'CES 2024', label: 'Innovation Award for Smart Home category' }
        ],
        testimonial: {
          quote: 'Octathorn transformed our vision into a product that people love. The design is so good, customers buy it just because it looks beautiful — the smart features are a bonus. That\'s product-market fit.',
          author: 'Lisa Zhang',
          authorRole: 'VP of Product, HomeSphere',
          initials: 'LZ'
        }
      }
    },
    { id: 2, title: 'Wearable Tech Concept',       genre: 'Product Design', description: 'Next-gen wearable form factor',          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80', url: '#' },
    { id: 3, title: 'Industrial Tool Design',      genre: 'Product Design', description: 'Ergonomic professional tooling',          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80', url: '#' },
    { id: 4, title: 'Consumer Electronics',        genre: 'Product Design', description: 'Sleek consumer device concept',          image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80', url: '#' },
    { id: 5, title: 'Medical Device Design',       genre: 'Product Design', description: 'FDA-compliant healthcare hardware',       image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80', url: '#' },
    { id: 6, title: 'Furniture Collection',        genre: 'Product Design', description: 'Minimalist furniture system design',     image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80', url: '#' },
  ],
  'UX UI design': [
    {
      id: 1,
      title: 'Snac AI',
      genre: 'UX UI Design',
      description: 'Cook what you have.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'Snac AI',
        heroSubtitle: 'AI-powered meal planning mobile application that helps users create meals using available kitchen ingredients—reducing waste and simplifying daily decisions.',
        meta: {
          client: 'SecureBank Corp',
          role: 'Lead UX/UI Designer',
          timeline: '14 Weeks',
          year: '2024',
          scope: 'AI Meal Planner · Mobile App · Design System'
        },
        overview: {
          heading: 'Intelligence made visible in everyday meal planning.',
          paragraphs: [
            'Snac AI is an AI-powered meal planning mobile application that helps users create meals using available kitchen ingredients—reducing waste and simplifying daily decisions.',
            'It enables users to generate recipes from ingredients, plan meals based on goals, auto-create shopping lists, and optimize ingredient usage through a minimal, intuitive interface.'
          ],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
        },
        tags: ['AI Meal Planner', 'Mobile App', 'Design System', 'UI/UX', 'Figma'],
        challenge: {
          title: 'Users struggle with what to cook daily, wasting ingredients, and maintaining diet goals.',
          paragraphs: [
            'People struggle to decide what to cook, often waste unused ingredients, and plan groceries inefficiently—leading to time loss and inconsistency.',
            'The product needed a fast, frictionless flow that makes planning and cooking feel effortless.'
          ]
        },
        process: {
          steps: [
            {
              step: '01',
              title: 'Discovery & Audit',
              body: 'User insights, competitor analysis, and behavior patterns to understand decision fatigue and planning gaps.'
            },
            {
              step: '02',
              title: 'Strategy & Positioning',
              body: 'Defined direction: “Intelligence made visible” with clear hierarchy, minimal interactions, and scalable UI foundations.'
            },
            {
              step: '03',
              title: 'Design System',
              body: 'Typography, colors, components, and scalable UI foundation built to support future feature expansion.'
            }
          ]
        },
        solution: {
          heading: 'Recipes, meal plans, and shopping lists—generated from what you already have.',
          paragraphs: [
            'Snac AI enables recipe generation from available ingredients, goal-based meal planning, auto-generated shopping lists, and ingredient usage optimization.',
            'Core features include an AI Recipe Generator, Meal Planning, My Kitchen tracking, a Shopping List, and Save & Share.'
          ],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
        },
        results: [
          { stat: 'Faster', label: 'daily meal decisions' },
          { stat: 'Reduced', label: 'ingredient waste' },
          { stat: 'Better', label: 'diet consistency' },
          { stat: 'Improved', label: 'kitchen workflow' }
        ],
        testimonial: {
          quote: 'Octathorn didn\'t just make it pretty — they made it work. Our treasury clients are raving about the new interface. Support tickets dropped overnight, and we\'re finally competitive with modern fintech platforms.',
          author: 'Robert Chen',
          authorRole: 'Chief Digital Officer, SecureBank Corp',
          initials: 'RC'
        }
      }
    },
    {
      id: 2,
      title: 'Humix AI',
      genre: 'UX UI Design',
      description: 'Your smart diet & fitness companion.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      url: 'https://www.figma.com/design/2OED9zNsH7QBSXGWl2xScr/Humix-AI?node-id=0-1&p=f&t=WKlCA4mOK52UEv2O-0',
      details: {
        heroTitle: 'Humix AI',
        heroSubtitle: 'AI-powered diet tracking and meal planning app designed for fitness-focused users. Track calories, monitor nutrition, and generate personalized plans based on goals.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'AI Diet Tracker · Mobile App · Design System'
        },
        overview: {
          heading: 'Data-driven fitness made simple.',
          paragraphs: [
            'Humix AI is designed to help users stay disciplined with diet routines by making tracking and insights effortless.',
            'The experience uses a dark, bold, high-contrast UI with structured dashboards that clearly communicate calories, macros, and progress.'
          ],
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80'
        },
        tags: ['Diet Tracking', 'Meal Planning', 'Nutrition', 'Dark UI', 'Dashboards', 'Design System'],
        challenge: {
          title: 'Tracking calories consistently and understanding nutrition intake to stay aligned with fitness goals.',
          paragraphs: [
            'Users struggle with consistent tracking, unclear nutrition insights, and meal planning that supports goals.',
            'The product needed quick logging, strong hierarchy, and data-focused layouts that remain fast and minimal to use daily.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'User behavior analysis in fitness & diet tracking to identify consistency and insight gaps.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Data-driven fitness made simple” with clarity-first dashboards.' },
            { step: '03', title: 'Design System', body: 'Built a scalable dark UI foundation with structured data visuals and reusable components.' }
          ]
        },
        solution: {
          heading: 'Track, plan, and improve — with clarity.',
          paragraphs: [
            'Humix AI enables calorie and macro tracking, AI diet plans for goals (lose/gain/maintain), progress dashboards, and quick meal logging with smart suggestions.',
            'Future-ready improvements include wearable sync, barcode scanning, and real-time coaching insights.'
          ],
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80'
        },
        results: [
          { stat: '↑', label: 'diet tracking consistency' },
          { stat: 'Clear', label: 'fitness progress visibility' },
          { stat: '↑', label: 'goal alignment through plans' },
          { stat: 'Simpler', label: 'nutrition management' }
        ]
      }
    },
    {
      id: 3,
      title: 'Kids Learning App',
      genre: 'UX UI Design',
      description: 'Learn through play, one reel at a time.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      url: '#',
      details: {
        heroTitle: 'Kids Learning App',
        heroSubtitle: 'Reel-based kids learning app with short educational videos, category-based content, parental control, and admin-managed uploads.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'Reel-Based Learning · Mobile App · Admin System'
        },
        overview: {
          heading: 'Learning made engaging & controlled.',
          paragraphs: [
            'Kids consume short, engaging educational videos structured by categories, creating consistency without boredom.',
            'Parental lock and child profiles keep the experience safe, while the admin panel enables full content control and moderation.'
          ],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
        },
        tags: ['Kids', 'Learning', 'Reels', 'Parental Lock', 'Admin Panel', 'Content'],
        challenge: {
          title: 'Engage kids with educational content while keeping control and safety for parents.',
          paragraphs: [
            'Parents struggle with non-educational media exposure and lack control over what kids consume.',
            'The product needed a safe, controlled environment that stays visual, simple, and highly engaging.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Studied kids’ behavior, attention patterns, and content consumption to shape the reel format.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Learning made engaging & controlled” balancing fun and safety.' },
            { step: '03', title: 'Design System', body: 'Built playful UI with simple navigation and structured content hierarchy.' }
          ]
        },
        solution: {
          heading: 'A safe reel feed built for learning.',
          paragraphs: [
            'Core features include reel learning feed, category-based content, parental lock, child profiles, and an admin panel for uploading and managing content.',
            'Future scope: AI content recommendations, progress tracking & rewards, voice-assisted learning, and multi-language support.'
          ],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
        },
        results: [
          { stat: '↑', label: 'engagement in learning' },
          { stat: 'Safe', label: 'content consumption' },
          { stat: '↑', label: 'retention via short videos' },
          { stat: 'Controlled', label: 'digital environment' }
        ]
      }
    },
    {
      id: 4,
      title: 'Heatriq',
      genre: 'UX UI Design',
      description: 'Real-time monitoring. Intelligent control.',
      image: heatriqCover,
      url: 'https://www.figma.com/design/KjCEzK2dvcbB8XG10AEyCL/HEATRIQ-WEB?node-id=0-1&p=f&t=3ps3KNEYBNw6LaDA-0',
      details: {
        heroTitle: 'Heatriq',
        heroSubtitle: 'Web + mobile monitoring platform to track, analyze, and control operational systems in real time with centralized dashboards, live alerts, and remote access.',
        meta: {
          client: '—',
          role: '—',
          timeline: '—',
          year: '2024',
          scope: 'Monitoring System · Web App · Mobile App · Admin Dashboard'
        },
        overview: {
          heading: 'Real-time clarity across every system.',
          paragraphs: [
            'Heatriq provides centralized dashboards that make system status, analytics, and alerts immediately visible.',
            'The design approach is clean and data-first with fast, responsive interactions and consistent web + mobile patterns.'
          ],
          image: heatriqCover
        },
        tags: ['Monitoring', 'Dashboards', 'Alerts', 'Analytics', 'Remote Access', 'Admin'],
        challenge: {
          title: 'No real-time visibility and delayed response to failures causes downtime and reactive decision-making.',
          paragraphs: [
            'Organizations face monitoring gaps, scattered data across tools, and limited remote access.',
            'The platform needed high readability, centralized control, and role-based access to support operational teams.'
          ]
        },
        process: {
          steps: [
            { step: '01', title: 'Discovery & Audit', body: 'Mapped system workflows, monitoring gaps, and user roles to define the dashboard and control model.' },
            { step: '02', title: 'Strategy & Positioning', body: 'Defined direction: “Real-time clarity across every system” with consistent cross-platform UX.' },
            { step: '03', title: 'Design System', body: 'Built scalable dashboards, data components, and analytics patterns across web and mobile.' }
          ]
        },
        solution: {
          heading: 'Centralized monitoring with instant alerts and remote control.',
          paragraphs: [
            'Web features include live monitoring dashboards, analytics & reports, alerts management, system control panels, and user/role management.',
            'Mobile features include live status views, push notifications, quick actions, compact dashboards, and access control.'
          ],
          image: heatriqCover
        },
        results: [
          { stat: '↑', label: 'system visibility' },
          { stat: 'Faster', label: 'response to issues' },
          { stat: '↑', label: 'operational control' },
          { stat: '↓', label: 'downtime' }
        ],
        gallery: [
          { src: heatriqCover, alt: 'Heatriq — Cover' },
          { src: heatriqGallery2, alt: 'Heatriq — Screen 1' },
          { src: heatriqGallery3, alt: 'Heatriq — Screen 2' },
          { src: heatriqGallery4, alt: 'Heatriq — Screen 3' },
          { src: heatriqGallery5, alt: 'Heatriq — Screen 4' },
          { src: heatriqGallery6, alt: 'Heatriq — Screen 5' },
          { src: heatriqGallery7, alt: 'Heatriq — Screen 6' }
        ],
        designSystemImages: [
          { src: heatriqCover, alt: 'Heatriq — Design system 1' },
          { src: heatriqGallery2, alt: 'Heatriq — Design system 2' },
          { src: heatriqGallery3, alt: 'Heatriq — Design system 3' }
        ]
      }
    },
    { id: 5, title: 'Travel Booking Interface',    genre: 'UX UI Design',   description: 'Frictionless booking journey',           image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80', url: '#' },
    { id: 6, title: 'Admin Panel System',          genre: 'UX UI Design',   description: 'Data-rich management dashboard',         image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', url: '#' },
  ],
};
