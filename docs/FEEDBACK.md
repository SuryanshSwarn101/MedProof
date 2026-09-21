# User Feedback — Level 5

## Feedback Collection Method

Feedback was collected through the public MedProof Google Form and recorded in the repository source log [`feeback.md`](../feeback.md). Each response includes a user name, email, Preprod wallet address, feedback, and rating. Fifty responses include a Preprod wallet address.

## Raw Feedback Log

| # | User | Feedback Summary | Date |
|---:|---|---|---|
| 1 | Hardika Kathlewar | Simple form; easy to fill. | 2026-09-17 |
| 2 | Aditya Shrivastav | Clear flow; reduced back-and-forth. | 2026-09-17 |
| 3 | Sri Hasini Sripada | Security step felt easy to understand. | 2026-09-17 |
| 4 | Ashish Singh | Explain what happens after removing an entry. | 2026-09-17 |
| 5 | Ritesh Ranjan | Question order felt natural. | 2026-09-17 |
| 6 | Nani Kodiganti | Add optional user-role field. | 2026-09-17 |
| 7 | Mirshad Kvr | Easy to connect with other tools. | 2026-09-17 |
| 8 | Priya Nair | Clarify the overall user flow. | 2026-09-17 |
| 9 | Mayank Sengupta | Explain who can see submitted details. | 2026-09-17 |
| 10 | Arjun Desai | Clarify how to add new entries. | 2026-09-17 |
| 11 | Sainarasimha Peddi Reddy | Test with real users in a live setting. | 2026-09-17 |
| 12 | Anupam Jaiswal | Status tracking builds trust. | 2026-09-17 |
| 13 | Vikram Chauhan | Streamline step-by-step guidance. | 2026-09-17 |
| 14 | Shaurya Tiwari | Add templates for frequently shared information. | 2026-09-17 |
| 15 | priyanshu pandey | Security detail was reassuring but not obvious. | 2026-09-17 |
| 16 | Meera Iyer | Clarify verification journey. | 2026-09-17 |
| 17 | Sami Guide | Efficient to avoid entering everything upfront. | 2026-09-18 |
| 18 | Devansh Rao | Improve onboarding explanation. | 2026-09-18 |
| 19 | Ayush Yadav | Add preview after submission. | 2026-09-18 |
| 20 | Sarika Doshi | Add activity history log. | 2026-09-18 |
| 21 | Rajjoo Bhai | Warn users not to enter sensitive information. | 2026-09-18 |
| 22 | Kishan Verma | Show an example of a failed check. | 2026-09-18 |
| 23 | Atharv Gupta | Trust indicator improves confidence. | 2026-09-18 |
| 24 | bunny bad | Form stayed focused and concise. | 2026-09-19 |
| 25 | Aditi Bansal | Clarify accepted upload file types. | 2026-09-19 |
| 26 | Bipronil Ghosh | Add sample input format. | 2026-09-19 |
| 27 | Dr. Sharad Doshi | Status indicators save time. | 2026-09-19 |
| 28 | Sanjeev Sharma | Increase mobile input spacing. | 2026-09-19 |
| 29 | Harnoor Singh | Trust indicator is useful. | 2026-09-19 |
| 30 | Nikhil Bhatt | Explain next action after submission. | 2026-09-19 |
| 31 | Harsh Doshi | Product feels polished. | 2026-09-19 |
| 32 | Vijendra Thakur | Add a short plain-English explanation. | 2026-09-19 |
| 33 | Varun Kumar | Minimum-needed sharing feels safer. | 2026-09-19 |
| 34 | rishabh doshi | Clear error messages matter. | 2026-09-19 |
| 35 | Rehan Akhtar | Check spacing on smaller phones. | 2026-09-19 |
| 36 | Ayush Yadav | Linking step feels personalized. | 2026-09-19 |
| 37 | Akshita Srivastava | Consider progress indicator for larger forms. | 2026-09-20 |
| 38 | Tanull Jain | Sharing only needed information feels safer. | 2026-09-20 |
| 39 | Utkarsh Saraswat | Selected-detail sharing is a good balance. | 2026-09-20 |
| 40 | SRINADH GHANTASALA | Add thank-you message after submission. | 2026-09-20 |
| 41 | MD FARUKH | Quick lookup saves time. | 2026-09-20 |
| 42 | Jainmiah Shaik | Label rating endpoints. | 2026-09-20 |
| 43 | Bhalani Vijay | Flow stays simple despite complexity. | 2026-09-20 |
| 44 | Vardhaann Rathore | Avoid requiring all uploads upfront. | 2026-09-20 |
| 45 | Pankaj Sharma | Make privacy note more visible. | 2026-09-20 |
| 46 | Singara Velan | Label rating choices with words. | 2026-09-20 |
| 47 | Ridhima Saxena | Explain sharing options better. | 2026-09-20 |
| 48 | Raghav Pillai | Clarify adding new entries. | 2026-09-20 |
| 49 | Ananya Bose | Add step-by-step examples. | 2026-09-20 |
| 50 | Kabir Malhotra | Make steps clearer for all users. | 2026-09-20 |

## What We Heard (Themes)

- Core flow is simple, concise, and understandable.
- Users want clearer step-by-step guidance and next-action instructions.
- Privacy boundaries and accepted input formats should be more visible.
- Trust indicators, status messages, and verification explanations improve confidence.
- Mobile spacing and plain-English copy matter for usability.

## What We Changed

| Change | Reason | Commit |
|---|---|---|
| Added post-reset secret-generation explanation. | Explain what happens after the action. | `df55972` |
| Added role tooltips to main navigation. | Clarify overall user flow. | `1e1f211` |
| Added patient-only/encrypted visibility note. | Clarify who can see submitted details. | `37737fa` |
| Clarified doctor issue workflow steps. | Explain how to add entries. | `693d94f` |
| Added Step 01–04 workflow labels. | Improve step-by-step guidance. | `16ca53c` |
| Expanded fill action explanation. | Clarify verification checks. | `f092cb4` |
| Added accepted file-format guidance. | Reduce upload uncertainty. | `106bb07` |
| Added request-code sample placeholder. | Show expected input format. | `75719e4` |
| Increased mobile input and textarea padding. | Improve small-screen usability. | `b68b6e6` |
| Added pharmacy completion thank-you message. | Give clear post-submit feedback. | `a412660` |
