import { blue, green, grey, red } from '@ant-design/colors';

const emailDescription =
  "<p>Hi,</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p><p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p><p> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>";
export const senders = [
  {
    id: 1,
    name: 'Crema',
    email: 'info@cremawork.com',
    profilePic: '/assets/images/logo/vcs.png',
  },
  {
    id: 2,
    name: 'Paytm',
    email: 'support@paytm.com',
    profilePic: '/assets/images/logo/paytm.png',
  },
  {
    id: 3,
    name: 'Bitcoins Support',
    email: 'support@bitcoin.com',
    profilePic: '/assets/images/logo/bitcoin.png',
  },
  {
    id: 4,
    name: 'Symu Freebies',
    email: 'noReply@flipkart.com',
    profilePic: '/assets/images/logo/flipkart.jpg',
  },
  {
    id: 5,
    name: 'Dribbble',
    email: 'support@dribbble.com',
    profilePic: '/assets/images/logo/dribble.png',
  },
  {
    id: 6,
    name: 'Amazon',
    email: 'offers@amazon.in',
    profilePic: '',
  },
  {
    id: 7,
    name: 'SBI YONO',
    email: 'yono@sbi.com',
    profilePic: '',
  },
  {
    id: 8,
    name: 'Naukri.com',
    email: 'noreply@nokri.com',
    profilePic: '/assets/images/logo/bitcoin.png',
  },
  {
    id: 9,
    name: 'Dribble',
    email: 'support@dribbble.com',
    profilePic: '/assets/images/logo/dribble.png',
  },
];

const mailList = [
  {
    id: 411,
    isChecked: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[5],
    },
    subject: 'Work Enquiry - Website Development',
    hasAttachments: false,
    isRead: true,
    folderValue: 121,
    isStarred: true,
    messages: [
      {
        messageId: 1,
        description: emailDescription,
        sender: senders[1],
        to: [senders[0]],
        cc: [],
        bcc: [],
        isStarred: false,
        sentOn: 'Thu, Oct 18, 2021 8:30 PM',
      },
      {
        messageId: 2,
        description: emailDescription,
        sender: senders[0],
        to: [senders[1]],
        cc: [],
        bcc: [],
        isStarred: true,
        sentOn: 'Thu, Oct 18, 2021 8:30 PM',
      },
      {
        messageId: 3,
        description: emailDescription,
        sender: senders[1],
        to: [senders[0]],
        cc: [],
        bcc: [],
        isStarred: true,
        sentOn: 'Thu, Oct 18, 2021 8:30 PM',
      },
    ],
  },
  {
    id: 412,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject: 'Your Movie Tickets for Sahoo',
    hasAttachments: false,
    isRead: true,
    isStarred: true,
    messages: [
      {
        messageId: 1,
        description: emailDescription,
        sender: senders[2],
        to: [senders[0]],
        cc: [],
        bcc: [],
        isStarred: false,
        sentOn: 'Wed, Oct 17, 2021 8:30 PM',
      },
      {
        messageId: 2,
        description: emailDescription,
        sender: senders[0],
        to: [senders[2]],
        cc: [],
        bcc: [],
        isStarred: false,
        sentOn: 'Wed, Oct 17, 2021 8:30 PM',
      },
    ],
    folderValue: 121,
  },
  {
    id: 4312,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject: 'Your Movie Tickets for Sahoo',
    hasAttachments: false,
    isRead: true,
    messages: [
      {
        messageId: 1,
        description: emailDescription,
        sender: senders[2],
        to: [senders[0]],
        cc: [],
        bcc: [],
        isStarred: false,
        sentOn: 'Wed, Oct 17, 2021 8:30 PM',
      },
      {
        messageId: 2,
        description: emailDescription,
        sender: senders[0],
        to: [senders[2]],
        cc: [],
        bcc: [],
        isStarred: false,
        sentOn: 'Wed, Oct 17, 2021 8:30 PM',
      },
    ],
    folderValue: 122,
  },
  {
    id: 413,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject:
      'Bitcoins IP Whitelist mail: Please approve this IP to continue to login',
    hasAttachments: true,
    isRead: true,
    isStarred: true,
    messages: [
      {
        messageId: 1,
        sender: senders[2],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        sentOn: 'Tues, Oct 15, 2021 8:30 PM',
      },
      {
        messageId: 2,
        sender: senders[0],
        to: [senders[2]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Tues, Oct 15, 2021 8:30 PM',
      },
    ],
    folderValue: 123,
  },
  {
    id: 414,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject: 'Download freebie Hello Tune plugin',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[3],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Tues, Oct 15, 2021 7:30 PM',
      },
    ],
    isRead: false,
    folderValue: 121,
  },
  {
    id: 2414,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject: 'Download freebie Hello Tune plugin',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[3],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Tues, Oct 15, 2021 7:30 PM',
      },
    ],
    isRead: false,
    folderValue: 121,
  },
  {
    id: 415,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject: 'Big Billion Day sale coming, Are you ready?',
    hasAttachments: true,
    messages: [
      {
        messageId: 1,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Mon, Oct 14, 2021 8:30 PM',
      },
      {
        messageId: 2,
        sender: senders[0],
        to: [senders[4]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Mon, Oct 14, 2021 8:30 PM',
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 416,
    isChecked: false,
    isStarred: true,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[5],
    },
    subject: 'Work Enquiry - Website Development',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[5],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sun, Oct 13, 2021 8:30 PM',
      },
      {
        messageId: 2,
        sender: senders[0],
        to: [senders[5]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sun, Oct 13, 2021 8:30 PM',
      },
    ],
    isRead: true,
    folderValue: 123,
  },
  {
    id: 417,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Your Movie Tickets for Sahoo',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[1],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sat, Oct 12, 2021 8:30 PM',
      },
    ],
    isRead: false,
    folderValue: 121,
  },
  {
    id: 4317,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Your Movie Tickets for Sahoo',
    hasAttachments: false,
    isStarred: true,
    messages: [
      {
        messageId: 1,
        sender: senders[1],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sat, Oct 12, 2021 8:30 PM',
      },
    ],
    isRead: false,
    folderValue: 122,
  },
  {
    id: 418,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject:
      'Bitcoins IP Whitelist mail: Please approve this IP to continue to login',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[2],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: true,
        sentOn: 'Fri, Oct 11, 2021 8:30 PM',
      },
    ],
    isRead: true,
    folderValue: 123,
  },
  {
    id: 419,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject: 'Download freebie Hello Tune plugin',
    hasAttachments: true,
    messages: [
      {
        messageId: 1,
        sender: senders[3],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Thru, Oct 10, 2021 8:30 PM',
      },
    ],
    isRead: false,
    folderValue: 121,
  },
  {
    id: 420,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Big Billion Day sale coming, Are you ready?',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        isStarred: false,
        description: emailDescription,
      },
      {
        messageId: 2,
        sender: senders[0],
        to: [senders[4]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        isStarred: false,
        description: emailDescription,
      },
      {
        messageId: 3,
        sender: senders[0],
        to: [senders[4]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
      {
        messageId: 4,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
      {
        messageId: 5,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 4320,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Big Billion Day sale coming, Are you ready?',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        isStarred: false,
        description: emailDescription,
      },
      {
        messageId: 2,
        sender: senders[0],
        to: [senders[4]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        isStarred: false,
        description: emailDescription,
      },
      {
        messageId: 3,
        sender: senders[0],
        to: [senders[4]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
      {
        messageId: 4,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
      {
        messageId: 5,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 4420,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Big Billion Day sale coming, Are you ready?',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        isStarred: false,
        description: emailDescription,
      },
      {
        messageId: 2,
        sender: senders[0],
        to: [senders[4]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        isStarred: false,
        description: emailDescription,
      },
      {
        messageId: 3,
        sender: senders[0],
        to: [senders[4]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
      {
        messageId: 4,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
      {
        messageId: 5,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        sentOn: 'Tues, Oct 09, 2021 8:30 PM',
        description: emailDescription,
        isStarred: false,
      },
    ],
    isRead: true,
    folderValue: 122,
  },
  {
    id: 421,
    isChecked: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[5],
    },
    subject: 'Work Enquiry - Website Development',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[7],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Mon, Oct 08, 2021 8:30 PM',
      },
    ],
    isRead: false,
    folderValue: 127,
  },
  {
    id: 422,
    isChecked: false,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[5],
    },
    subject: 'Your Movie Tickets for Sahoo',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[1],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Mon, Oct 08, 2021 6:30 PM',
      },
    ],
    isRead: false,
    folderValue: 123,
  },
  {
    id: 442,
    isChecked: false,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[5],
    },
    subject: 'Your Movie Tickets for Sahoo',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[1],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Mon, Oct 08, 2021 6:30 PM',
      },
    ],
    isRead: false,
    folderValue: 125,
  },
  {
    id: 423,
    isChecked: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[5],
    },
    subject:
      'Bitcoins IP Whitelist mail: Please approve this IP to continue to login',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[2],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sun, Oct 07, 2021 6:30 PM',
      },
    ],
    isRead: false,
    folderValue: 127,
  },
  {
    id: 424,
    isChecked: false,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[5],
    },
    subject: 'Download freebie Hello Tune plugin',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[3],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sat, Oct 06, 2021 6:30 PM',
      },
    ],
    isRead: false,
    folderValue: 121,
  },
  {
    id: 4243,
    isChecked: false,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[5],
    },
    subject: 'Download freebie Hello Tune plugin',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[3],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sat, Oct 06, 2021 6:30 PM',
      },
    ],
    isRead: false,
    folderValue: 121,
  },
  {
    id: 425,
    isChecked: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[5],
    },
    subject: 'Big Billion Day sale coming, Are you ready?',
    hasAttachments: true,
    messages: [
      {
        messageId: 1,
        sender: senders[4],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Sat, Oct 06, 2021 4:30 PM',
      },
    ],
    isRead: true,
    folderValue: 127,
  },
  {
    id: 426,
    isChecked: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[5],
    },
    subject: 'Offers you can not miss!',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[5],
        to: [senders[0]],
        cc: [],
        bcc: [],
        isStarred: false,
        description: emailDescription,
        sentOn: 'Fri, Oct 05, 2021 6:30 PM',
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 4436,
    isChecked: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[5],
    },
    subject: 'Offers you can not miss!',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[5],
        to: [senders[0]],
        cc: [],
        bcc: [],
        isStarred: false,
        description: emailDescription,
        sentOn: 'Fri, Oct 05, 2021 6:30 PM',
      },
    ],
    isRead: true,
    folderValue: 126,
  },
  {
    id: 427,
    isChecked: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[5],
    },
    subject: 'Use SBI YONO for faster banking',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sender: senders[6],
        to: [senders[0]],
        cc: [],
        bcc: [],
        description: emailDescription,
        isStarred: false,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 435,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Thank you for being with us!',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
        description: emailDescription,
        isStarred: false,
        sender: senders[7],
        to: [senders[0]],
        cc: [],
        bcc: [],
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 436,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Thank you for being with us!',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
        description: emailDescription,
        isStarred: false,
        sender: senders[7],
        to: [senders[0]],
        cc: [],
        bcc: [],
      },
      {
        messageId: 2,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
        description: emailDescription,
        isStarred: false,
        sender: senders[0],
        to: [senders[7]],
        cc: [],
        bcc: [],
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 437,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Thank you for being with us!',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
        description: emailDescription,
        sender: senders[8],
        to: [senders[0]],
        cc: [],
        bcc: [],
        isStarred: false,
      },
      {
        messageId: 2,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
        description: emailDescription,
        sender: senders[0],
        to: [senders[8]],
        cc: [],
        bcc: [],
        isStarred: false,
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 438,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Thank you for being with us!',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        isStarred: false,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
        description: emailDescription,
        sender: senders[8],
        to: [senders[0]],
        cc: [],
        bcc: [],
      },
    ],
    isRead: true,
    folderValue: 121,
  },
  {
    id: 438,
    isChecked: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[5],
    },
    subject: 'Thank you for being with us!',
    hasAttachments: false,
    messages: [
      {
        messageId: 1,
        isStarred: false,
        sentOn: 'Wed, Oct 03, 2021 6:30 PM',
        description: emailDescription,
        sender: senders[8],
        to: [senders[0]],
        cc: [],
        bcc: [],
      },
    ],
    isRead: true,
    folderValue: 121,
  },
];
export default mailList;
