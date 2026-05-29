// ─── TRANSLATIONS ───────────────────────────────────────────────
const T = {
  es: {
    appTitle: "לוח לימוד", appSub: "Panel de Estudio",
    home:"Inicio", logs:"Registros", goals:"Metas", chaz:"Jazarot", settings:"Ajustes",
    addSession:"+ Sesión", addGoal:"+ Meta", addChaz:"+ Jazará",
    todaySessions:"Sesiones hoy", weekSessions:"Esta semana", totalSessions:"Total sesiones",
    completedGoals:"Metas cumplidas", totalStreak:"Racha total",
    recentActivity:"Actividad reciente", upcomingGoals:"Metas próximas",
    noLogs:"¡Aún no hay sesiones registradas!", noGoals:"Crea tu primera meta de estudio.",
    noChaz:"Crea tu primera meta de Jazará. ¡Construye rachas! 🔥",
    registerSession:"Registrar sesión",
    section:"Sección", book:"Libro / Tractado", unit:"Unidad",
    perek:"Capítulo", daf:"Daf", amud:"Amud", mishna:"Mishná", siman:"Siman",
    type:"Tipo de sesión", notes:"Notas / Comentarios",
    notesPlaceholder:"Observaciones, dudas, jidushim…",
    study:"Estudio", review:"Repaso", chazer:"Jazar",
    save:"Guardar", cancel:"Cancelar", delete:"Eliminar",
    goalDesc:"Descripción de la meta", targetUnit:"Objetivo específico",
    deadline:"Fecha límite", progress:"Progreso",
    completed:"Completada", overdue:"Vencida", daysLeft:"días restantes", dueToday:"¡Vence hoy!",
    chazDesc:"Nombre / descripción", material:"Material a repasar",
    frequency:"Frecuencia de repaso", startDate:"Fecha de inicio",
    daily:"Diario", every3:"Cada 3 días", weekly:"Semanal",
    biweekly:"Quincenal", monthly:"Mensual", custom:"Personalizado",
    customDays:"Cada cuántos días",
    streakLabel:"racha", markDone:"¡Hice jazará!", markToday:"Marcar hoy",
    dueTodayAlert:"¡Jazarot pendientes hoy!",
    overdueAlert:"metas vencidas",
    emailConfig:"Configuración de correo", yourEmail:"Tu correo",
    weeklyReport:"Reporte semanal (lunes)", monthlyReport:"Reporte mensual (día 1)",
    preview:"Vista previa", copyHtml:"Copiar HTML", send:"Enviar",
    reportTitle:"Reporte", reportWeekly:"Semanal", reportMonthly:"Mensual",
    language:"Idioma",
    markAmud:"Marcar amud", unmark:"Desmarcar",
    selectDaf:"Seleccionar daf…", selectAmud:"Seleccionar amud",
    selectPerek:"Seleccionar capítulo…", selectMishna:"Seleccionar mishná…",
    selectSiman:"Seleccionar siman…",
    chelekShulchan:"Parte del Shulján Aruj",
    allShas:"Todo el Shas", masechtot:"Masejtot",
    dafimStudied:"dafim estudiados", perakim:"perakim", simanim:"simanim",
    date:"Fecha",
    install:"Instalar app", installDesc:"Úsala sin internet, como Amudé HaOlam",
    goTo:"Ver →",
  },
  he: {
    appTitle: "לוח לימוד", appSub: "לוח מעקב לימוד",
    home:"ראשי", logs:"רשומות", goals:"יעדים", chaz:"חזרות", settings:"הגדרות",
    addSession:"+ שיעור", addGoal:"+ יעד", addChaz:"+ חזרה",
    todaySessions:"שיעורים היום", weekSessions:"השבוע", totalSessions:"סה״כ שיעורים",
    completedGoals:"יעדים שהושלמו", totalStreak:"סה״כ חזרות",
    recentActivity:"פעילות אחרונה", upcomingGoals:"יעדים קרובים",
    noLogs:"עדיין אין רשומות!", noGoals:"צור את היעד הראשון שלך.",
    noChaz:"צור יעד חזרה ראשון. בנה רצף! 🔥",
    registerSession:"רישום שיעור",
    section:"חלק", book:"מסכת / ספר", unit:"יחידה",
    perek:"פרק", daf:"דף", amud:"עמוד", mishna:"משנה", siman:"סימן",
    type:"סוג הלימוד", notes:"הערות",
    notesPlaceholder:"הערות, שאלות, חידושים…",
    study:"לימוד", review:"עיון", chazer:"חזרה",
    save:"שמור", cancel:"ביטול", delete:"מחק",
    goalDesc:"תיאור היעד", targetUnit:"יעד ספציפי",
    deadline:"תאריך יעד", progress:"התקדמות",
    completed:"הושלם", overdue:"עבר זמנו", daysLeft:"ימים נותרו", dueToday:"!היום אחרון",
    chazDesc:"שם / תיאור", material:"חומר לחזרה",
    frequency:"תדירות חזרה", startDate:"תאריך התחלה",
    daily:"יומי", every3:"כל 3 ימים", weekly:"שבועי",
    biweekly:"דו-שבועי", monthly:"חודשי", custom:"מותאם אישית",
    customDays:"כל כמה ימים",
    streakLabel:"רצף", markDone:"!עשיתי חזרה", markToday:"סמן היום",
    dueTodayAlert:"!חזרות להיום",
    overdueAlert:"יעדים שעבר זמנם",
    emailConfig:"הגדרות דוא״ל", yourEmail:"כתובת דוא״ל",
    weeklyReport:"דוח שבועי (יום ב׳)", monthlyReport:"דוח חודשי (ראש חודש)",
    preview:"תצוגה מקדימה", copyHtml:"העתק HTML", send:"שלח",
    reportTitle:"דוח", reportWeekly:"שבועי", reportMonthly:"חודשי",
    language:"שפה",
    markAmud:"סמן עמוד", unmark:"בטל סימון",
    selectDaf:"בחר דף…", selectAmud:"בחר עמוד",
    selectPerek:"בחר פרק…", selectMishna:"בחר משנה…",
    selectSiman:"בחר סימן…",
    chelekShulchan:"חלק שולחן ערוך",
    allShas:"כל הש״ס", masechtot:"מסכתות",
    dafimStudied:"דפים נלמדו", perakim:"פרקים", simanim:"סימנים",
    date:"תאריך",
    install:"התקן אפליקציה", installDesc:"השתמש ללא אינטרנט, כמו עמודי העולם",
    goTo:"ראה →",
  }
};

// ─── TANACH ─────────────────────────────────────────────────────
const TANACH = {
  torah: {
    he:"תורה", es:"Torá",
    books:[
      {id:"bereshit",  he:"בראשית",    es:"Génesis",       perakim:50},
      {id:"shemot",    he:"שמות",      es:"Éxodo",         perakim:40},
      {id:"vayikra",   he:"ויקרא",     es:"Levítico",      perakim:27},
      {id:"bamidbar",  he:"במדבר",     es:"Números",       perakim:36},
      {id:"devarim",   he:"דברים",     es:"Deuteronomio",  perakim:34},
    ]
  },
  neviim: {
    he:"נביאים", es:"Profetas",
    books:[
      {id:"yehoshua",  he:"יהושע",     es:"Josué",         perakim:24},
      {id:"shoftim",   he:"שופטים",    es:"Jueces",        perakim:21},
      {id:"shmuel1",   he:"שמואל א",   es:"Samuel I",      perakim:31},
      {id:"shmuel2",   he:"שמואל ב",   es:"Samuel II",     perakim:24},
      {id:"melachim1", he:"מלכים א",   es:"Reyes I",       perakim:22},
      {id:"melachim2", he:"מלכים ב",   es:"Reyes II",      perakim:25},
      {id:"yeshaya",   he:"ישעיה",     es:"Isaías",        perakim:66},
      {id:"yirmiya",   he:"ירמיה",     es:"Jeremías",      perakim:52},
      {id:"yechezkel", he:"יחזקאל",    es:"Ezequiel",      perakim:48},
      {id:"hoshea",    he:"הושע",      es:"Oseas",         perakim:14},
      {id:"yoel",      he:"יואל",      es:"Joel",          perakim:4},
      {id:"amos",      he:"עמוס",      es:"Amós",          perakim:9},
      {id:"ovadia",    he:"עובדיה",    es:"Abdías",        perakim:1},
      {id:"yona",      he:"יונה",      es:"Jonás",         perakim:4},
      {id:"micha",     he:"מיכה",      es:"Miqueas",       perakim:7},
      {id:"nachum",    he:"נחום",      es:"Nahúm",         perakim:3},
      {id:"chavakuk",  he:"חבקוק",     es:"Habacuc",       perakim:3},
      {id:"tzfania",   he:"צפניה",     es:"Sofonías",      perakim:3},
      {id:"chagai",    he:"חגי",       es:"Ageo",          perakim:2},
      {id:"zecharia",  he:"זכריה",     es:"Zacarías",      perakim:14},
      {id:"malachi",   he:"מלאכי",     es:"Malaquías",     perakim:3},
    ]
  },
  ketuvim: {
    he:"כתובים", es:"Escritos",
    books:[
      {id:"tehilim",   he:"תהילים",    es:"Salmos",        perakim:150},
      {id:"mishlei",   he:"משלי",      es:"Proverbios",    perakim:31},
      {id:"iyov",      he:"איוב",      es:"Job",           perakim:42},
      {id:"shir",      he:"שיר השירים",es:"Cantar",        perakim:8},
      {id:"rut",       he:"רות",       es:"Rut",           perakim:4},
      {id:"eicha",     he:"איכה",      es:"Lamentaciones", perakim:5},
      {id:"kohelet",   he:"קהלת",      es:"Eclesiastés",   perakim:12},
      {id:"esther",    he:"אסתר",      es:"Ester",         perakim:10},
      {id:"daniel",    he:"דניאל",     es:"Daniel",        perakim:12},
      {id:"ezra",      he:"עזרא",      es:"Esdras",        perakim:10},
      {id:"nechemia",  he:"נחמיה",     es:"Nehemías",      perakim:13},
      {id:"divrei1",   he:"דברי הימים א",es:"Crónicas I",  perakim:29},
      {id:"divrei2",   he:"דברי הימים ב",es:"Crónicas II", perakim:36},
    ]
  }
};

// ─── MISHNAH (6 Sedarim, full perakim + mishnayot count) ────────
const MISHNAH = {
  zeraim: {
    he:"זרעים", es:"Zeraim",
    masechtot:[
      {id:"berachot",    he:"ברכות",       es:"Berajot",      perakim:[3,8,6,7,5,8,4,8,5]},
      {id:"peah",        he:"פאה",         es:"Peá",          perakim:[6,8,8,11,8,11,8,9]},
      {id:"demai",       he:"דמאי",        es:"Demai",        perakim:[4,5,6,7,11,12,8]},
      {id:"kilayim",     he:"כלאים",       es:"Kilayim",      perakim:[9,11,7,9,8,9,8,6,10]},
      {id:"sheviit",     he:"שביעית",      es:"Shviit",       perakim:[8,10,10,10,9,6,7,11,9,9]},
      {id:"terumot",     he:"תרומות",      es:"Trumot",       perakim:[10,6,9,13,9,6,7,12,4,12,10]},
      {id:"maasrot",     he:"מעשרות",      es:"Maasrot",      perakim:[8,8,10,6,8]},
      {id:"maaser_sheni",he:"מעשר שני",    es:"Maaser Sheni", perakim:[7,10,13,12,15]},
      {id:"chalah",      he:"חלה",         es:"Jalá",         perakim:[9,8,10,11]},
      {id:"orlah",       he:"ערלה",        es:"Orlá",         perakim:[9,17,9]},
      {id:"bikkurim",    he:"ביכורים",     es:"Bikurim",      perakim:[11,11,12,5]},
    ]
  },
  moed: {
    he:"מועד", es:"Moed",
    masechtot:[
      {id:"shabbat_m",   he:"שבת",         es:"Shabat",       perakim:[11,7,6,2,4,10,4,7,7,6,6,5,7,4,3,8,8,3,6,5,3,6,5,5]},
      {id:"eruvin",      he:"עירובין",     es:"Eruvín",       perakim:[10,6,9,11,9,10,11,11,4,15]},
      {id:"pesachim_m",  he:"פסחים",       es:"Pesajim",      perakim:[7,8,8,9,10,6,13,8,11,9]},
      {id:"shekalim",    he:"שקלים",       es:"Shekalim",     perakim:[7,5,4,9,6,6,7,8]},
      {id:"yoma_m",      he:"יומא",        es:"Yomá",         perakim:[8,7,11,6,7,8,5,9]},
      {id:"sukkah_m",    he:"סוכה",        es:"Sucá",         perakim:[11,9,15,10,8]},
      {id:"beitza",      he:"ביצה",        es:"Beitzá",       perakim:[10,10,8,7,7]},
      {id:"rosh_hashana",he:"ראש השנה",    es:"Rosh Hashaná", perakim:[9,8,9,9]},
      {id:"taanit",      he:"תענית",       es:"Taanit",       perakim:[7,10,9,8]},
      {id:"megillah",    he:"מגילה",       es:"Meguila",      perakim:[11,6,6,10]},
      {id:"moed_katan",  he:"מועד קטן",    es:"Moed Katán",   perakim:[10,5,9]},
      {id:"chagigah",    he:"חגיגה",       es:"Jaguigá",      perakim:[8,7,8]},
    ]
  },
  nashim: {
    he:"נשים", es:"Nashim",
    masechtot:[
      {id:"yevamot",     he:"יבמות",       es:"Yevamot",      perakim:[4,10,10,13,13,6,6,6,10,9,7,6,13,9,10,7,13,6]},
      {id:"ketubot",     he:"כתובות",      es:"Ketuvot",      perakim:[10,10,9,12,9,7,10,8,9,6,6,4,11]},
      {id:"nedarim",     he:"נדרים",       es:"Nedarim",      perakim:[4,5,11,8,6,10,9,7,10,8,12]},
      {id:"nazir",       he:"נזיר",        es:"Nazir",        perakim:[7,10,7,7,7,11,4,2,5]},
      {id:"sotah",       he:"סוטה",        es:"Sotá",         perakim:[9,6,8,5,5,4,8,7,15]},
      {id:"gittin",      he:"גיטין",       es:"Guitin",       perakim:[9,7,8,9,9,7,9,10,10]},
      {id:"kiddushin",   he:"קידושין",     es:"Kidushín",     perakim:[10,10,13,14]},
    ]
  },
  nezikin: {
    he:"נזיקין", es:"Nezikin",
    masechtot:[
      {id:"bava_kama_m", he:"בבא קמא",     es:"Bava Kamá",    perakim:[4,6,11,9,7,6,7,7,12,10]},
      {id:"bava_metzia_m",he:"בבא מציעא",  es:"Bava Metziá",  perakim:[8,11,12,12,11,8,11,8,13,6]},
      {id:"bava_batra_m", he:"בבא בתרא",   es:"Bava Batra",   perakim:[6,14,8,9,11,8,4,8,10,8]},
      {id:"sanhedrin_m", he:"סנהדרין",     es:"Sanhedrín",    perakim:[6,5,8,5,5,6,11,7,6,6,6]},
      {id:"makkot",      he:"מכות",        es:"Makot",        perakim:[10,8,16]},
      {id:"shevuot",     he:"שבועות",      es:"Shvuot",       perakim:[7,5,11,13,5,7,8,6]},
      {id:"eduyot",      he:"עדויות",      es:"Eduyot",       perakim:[14,10,12,12,7,3,9,7]},
      {id:"avodah_zarah",he:"עבודה זרה",   es:"Avodá Zará",   perakim:[9,7,10,12,12]},
      {id:"avot",        he:"אבות",        es:"Avot",         perakim:[18,16,18,22,23,11]},
      {id:"horayot",     he:"הוריות",      es:"Horayot",      perakim:[9,7,8]},
    ]
  },
  kodashim: {
    he:"קדשים", es:"Kodashim",
    masechtot:[
      {id:"zevachim",    he:"זבחים",       es:"Zevajim",      perakim:[4,5,6,6,8,7,7,12,7,8,8,6,8,10]},
      {id:"menachot",    he:"מנחות",       es:"Menajot",      perakim:[4,5,7,5,9,7,6,7,9,9,9,5,11]},
      {id:"chullin",     he:"חולין",       es:"Julín",        perakim:[7,10,7,7,5,7,6,6,8,4,2,4]},
      {id:"bechorot",    he:"בכורות",      es:"Bejorot",      perakim:[7,9,4,10,6,12,7,10,8]},
      {id:"arachin",     he:"ערכין",       es:"Arajin",       perakim:[4,6,5,4,6,5,5,7,8]},
      {id:"temurah",     he:"תמורה",       es:"Temurá",       perakim:[6,3,5,4,6,5,6]},
      {id:"keritot",     he:"כריתות",      es:"Kritot",       perakim:[7,6,10,3,8,9]},
      {id:"meilah",      he:"מעילה",       es:"Meilá",        perakim:[4,9,3,6,5,6]},
      {id:"tamid",       he:"תמיד",        es:"Tamid",        perakim:[4,5,9,3,6,3,4]},
      {id:"middot",      he:"מידות",       es:"Midot",        perakim:[9,6,4,7,4]},
      {id:"kinnim",      he:"קינים",       es:"Kinim",        perakim:[4,5,6]},
    ]
  },
  taharot: {
    he:"טהרות", es:"Taharot",
    masechtot:[
      {id:"keilim",      he:"כלים",        es:"Kelim",        perakim:[9,8,8,4,11,4,6,11,8,8,9,8,7,8,6,8,17,9,10,7,3,10,5,17,9,9,12,10,8,4]},
      {id:"ohalot",      he:"אהלות",       es:"Ohalot",       perakim:[8,7,7,3,7,7,6,6,16,7,9,8,6,7,10,5,5,10,16,3]},
      {id:"negaim",      he:"נגעים",       es:"Negaim",       perakim:[6,5,8,11,5,8,5,10,3,10,12,7,12,13]},
      {id:"parah",       he:"פרה",         es:"Pará",         perakim:[4,5,11,4,9,5,12,11,6,6,9,11]},
      {id:"taharot",     he:"טהרות",       es:"Taharot",      perakim:[9,8,8,13,9,10,9,9,8,8]},
      {id:"mikvaot",     he:"מקוואות",     es:"Mikvaot",      perakim:[8,10,4,5,6,11,7,5,7,8]},
      {id:"niddah",      he:"נדה",         es:"Nidá",         perakim:[7,7,7,7,9,14,5,4,11,8]},
      {id:"makhshirin",  he:"מכשירין",     es:"Majshirin",    perakim:[6,11,8,10,11,8]},
      {id:"zavim",       he:"זבים",        es:"Zavim",        perakim:[6,4,3,7,12]},
      {id:"tevul_yom",   he:"טבול יום",    es:"Tvul Yom",     perakim:[5,8,6,7]},
      {id:"yadayim",     he:"ידים",        es:"Yadayim",      perakim:[5,4,2,8]},
      {id:"uktzin",      he:"עוקצין",      es:"Uktzin",       perakim:[6,10,12]},
    ]
  }
};

// ─── SHAS BAVLI (all dafim per masechet) ────────────────────────
// dafim = number of dafim (2a..end), starting from daf 2
const SHAS = {
  zeraim: {
    he:"זרעים", es:"Zeraim",
    masechtot:[
      {id:"berachot_g",    he:"ברכות",       es:"Berajot",       dafim:64},
    ]
  },
  moed: {
    he:"מועד", es:"Moed",
    masechtot:[
      {id:"shabbat_g",     he:"שבת",         es:"Shabat",        dafim:157},
      {id:"eruvin_g",      he:"עירובין",     es:"Eruvín",        dafim:105},
      {id:"pesachim_g",    he:"פסחים",       es:"Pesajim",       dafim:121},
      {id:"shekalim_g",    he:"שקלים",       es:"Shekalim",      dafim:22},
      {id:"yoma_g",        he:"יומא",        es:"Yomá",          dafim:88},
      {id:"sukkah_g",      he:"סוכה",        es:"Sucá",          dafim:56},
      {id:"beitza_g",      he:"ביצה",        es:"Beitzá",        dafim:40},
      {id:"rosh_hashana_g",he:"ראש השנה",    es:"Rosh Hashaná",  dafim:35},
      {id:"taanit_g",      he:"תענית",       es:"Taanit",        dafim:31},
      {id:"megillah_g",    he:"מגילה",       es:"Meguila",       dafim:32},
      {id:"moed_katan_g",  he:"מועד קטן",    es:"Moed Katán",    dafim:29},
      {id:"chagigah_g",    he:"חגיגה",       es:"Jaguigá",       dafim:27},
    ]
  },
  nashim: {
    he:"נשים", es:"Nashim",
    masechtot:[
      {id:"yevamot_g",     he:"יבמות",       es:"Yevamot",       dafim:122},
      {id:"ketubot_g",     he:"כתובות",      es:"Ketuvot",       dafim:112},
      {id:"nedarim_g",     he:"נדרים",       es:"Nedarim",       dafim:91},
      {id:"nazir_g",       he:"נזיר",        es:"Nazir",         dafim:66},
      {id:"sotah_g",       he:"סוטה",        es:"Sotá",          dafim:49},
      {id:"gittin_g",      he:"גיטין",       es:"Guitin",        dafim:90},
      {id:"kiddushin_g",   he:"קידושין",     es:"Kidushín",      dafim:82},
    ]
  },
  nezikin: {
    he:"נזיקין", es:"Nezikin",
    masechtot:[
      {id:"bava_kama_g",   he:"בבא קמא",     es:"Bava Kamá",     dafim:119},
      {id:"bava_metzia_g", he:"בבא מציעא",   es:"Bava Metziá",   dafim:119},
      {id:"bava_batra_g",  he:"בבא בתרא",    es:"Bava Batra",    dafim:176},
      {id:"sanhedrin_g",   he:"סנהדרין",     es:"Sanhedrín",     dafim:113},
      {id:"makkot_g",      he:"מכות",        es:"Makot",         dafim:24},
      {id:"shevuot_g",     he:"שבועות",      es:"Shvuot",        dafim:49},
      {id:"avodah_zarah_g",he:"עבודה זרה",   es:"Avodá Zará",    dafim:76},
      {id:"horayot_g",     he:"הוריות",      es:"Horayot",       dafim:14},
    ]
  },
  kodashim: {
    he:"קדשים", es:"Kodashim",
    masechtot:[
      {id:"zevachim_g",    he:"זבחים",       es:"Zevajim",       dafim:120},
      {id:"menachot_g",    he:"מנחות",       es:"Menajot",       dafim:110},
      {id:"chullin_g",     he:"חולין",       es:"Julín",         dafim:142},
      {id:"bechorot_g",    he:"בכורות",      es:"Bejorot",       dafim:61},
      {id:"arachin_g",     he:"ערכין",       es:"Arajin",        dafim:34},
      {id:"temurah_g",     he:"תמורה",       es:"Temurá",        dafim:34},
      {id:"keritot_g",     he:"כריתות",      es:"Kritot",        dafim:28},
      {id:"meilah_g",      he:"מעילה",       es:"Meilá",         dafim:22},
      {id:"niddah_g",      he:"נדה",         es:"Nidá",          dafim:73},
    ]
  }
};

// ─── SHULCHAN ARUCH ─────────────────────────────────────────────
const SHULCHAN = [
  {id:"orach_chaim",     he:"אורח חיים",   es:"Oraj Jaim",     simanim:697},
  {id:"yoreh_deah",      he:"יורה דעה",    es:"Yoré Deá",      simanim:403},
  {id:"even_haezer",     he:"אבן העזר",    es:"Even HaEzer",   simanim:178},
  {id:"choshen_mishpat", he:"חושן משפט",   es:"Joshen Mishpat",simanim:427},
];

// ─── STUDY TYPES ────────────────────────────────────────────────
const STUDY_TYPES = [
  {id:"study",  he:"לימוד",  es:"Estudio", icon:"📖", h:250},
  {id:"review", he:"עיון",   es:"Repaso",  icon:"🔄", h:199},
  {id:"chazer", he:"חזרה",   es:"Jazar",   icon:"🧠", h:28},
];

const CHAZ_INTERVALS = [
  {id:"daily",    days:1,  icon:"⚡"},
  {id:"every3",   days:3,  icon:"🔁"},
  {id:"weekly",   days:7,  icon:"📅"},
  {id:"biweekly", days:14, icon:"🗓"},
  {id:"monthly",  days:30, icon:"🌙"},
  {id:"custom",   days:0,  icon:"✏️"},
];

// ─── SECTION META ────────────────────────────────────────────────
const SECTIONS_META = {
  tanach:   {he:"תנ״ך",    es:"Tanaj",        emoji:"🌿", hue:142},
  mishnah:  {he:"משנה",    es:"Mishná",       emoji:"📗", hue:199},
  gemara:   {he:"גמרא",    es:"Guemará",      emoji:"📙", hue:28},
  shulchan: {he:"שו״ע",    es:"Shulján Aruj", emoji:"📕", hue:339},
};
