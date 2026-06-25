// export const branches = [
//   {
//     type: "physical",
//     title: "Beside El Ghazawy Workspace – 6th of October",
//     address:
//       "In front of Riyad El Saleheen School, Yathreb, First 6th of October City, Giza Governorate 3231473, Egypt",
//     note: "Main branch in 6th of October",
//   },
//   {
//     type: "physical",
//     title: "Beside ARC Coworking Space – 6th of October",
//     address:
//       "ARC Work Space, Building 98, First 6th of October City, Giza Governorate 3233425, Egypt",
//     note: "Workshops & training sessions",
//   },
//   {
//     type: "physical",
//     title: "Beside Barah Coworking Space – Dokki",
//     address:
//       "Beside Misr Gas Station, Nazlet El Dokki, Giza — near Dokki Metro Station",
//     note: "Cairo branch (central location)",
//   },
//   {
//     type: "online",
//     title: "Online Branch",
//     address:
//       "Available everywhere — live sessions, recorded content, and mentor support",
//     note: "Fully remote learning",
//   },
// ];

export const branches = [ {
     id: "october-ghazawy",
     type: "physical",
      formLabel: "6th of October — El Ghazawy Workspace",
       title: "Beside El Ghazawy Workspace – 6th of October",
        address: "In front of Riyad El Saleheen School, Yathreb, First 6th of October City, Giza Governorate 3231473, Egypt", 
        note: "Main branch in 6th of October", }, 
        { id: "october-arc", type: "physical", 
            formLabel: "6th of October — ARC Coworking Space", title: "Beside ARC Coworking Space – 6th of October", address: "ARC Work Space, Building 98, First 6th of October City, Giza Governorate 3233425, Egypt", note: "Workshops & training sessions", }, { id: "dokki-barah", type: "physical", formLabel: "Dokki — Barah Coworking Space", title: "Beside Barah Coworking Space – Dokki", address: "Beside Misr Gas Station, Nazlet El Dokki, Giza — near Dokki Metro Station", note: "Cairo branch (central location)", }, { id: "online", type: "online", formLabel: "Online Learning", title: "Online Branch", address: "Available everywhere — live sessions, recorded content, and mentor support", note: "Fully remote learning", }, ] as const;