// Module scores storage (in-memory)
const moduleScores = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};

// User info storage (in-memory, replaces localStorage)
const userInfo = {
  name: '',
  lastName: '',
  email: ''
};

// Module data
const modulesData = [
  {
    id: 1,
    title: "Основы промпт-инжиниринга",
    fullTitle: "Модуль 1. Основы промпт-инжиниринга для строителей",
    maxScore: 12,
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        points: 2,
        text: "Что такое промпт-инжиниринг?",
        options: [
          { letter: "A", text: "Процесс программирования искусственного интеллекта на языке Python" },
          { letter: "B", text: "Искусство создания точных запросов для взаимодействия с ИИ" },
          { letter: "C", text: "Система проверки качества строительных конструкций" },
          { letter: "D", text: "Метод расчёта смет и графиков строительства" }
        ],
        correctAnswer: "B"
      },
      {
        id: 2,
        type: "multiple_choice",
        points: 2,
        text: "Нейросеть ошибается потому, что:",
        options: [
          { letter: "A", text: "Она обучена неправильно и требует переустановки" },
          { letter: "B", text: "Выбирает наиболее вероятное продолжение текста на основе вероятностей" },
          { letter: "C", text: "Её специально обучают говорить неправду" },
          { letter: "D", text: "Она не может работать с текстом на русском языке" }
        ],
        correctAnswer: "B"
      },
      {
        id: 3,
        type: "multiple_choice",
        points: 2,
        text: "Какие из указанных направлений применения ИИ в строительстве НЕ упоминаются в модуле?",
        options: [
          { letter: "A", text: "Автоматизация документооборота и отчётности" },
          { letter: "B", text: "Работа с персоналом и обучение сотрудников" },
          { letter: "C", text: "Производство строительных материалов на заводах" },
          { letter: "D", text: "Контроль качества документации" }
        ],
        correctAnswer: "C"
      },
      {
        id: 4,
        type: "matching",
        points: 3,
        text: "Сопоставьте этапы обучения нейросети с их описанием:",
        items: [
          { number: "1", text: "Pre-train (предобучение)", correct: "А" },
          { number: "2", text: "Fine-tuning (дообучение)", correct: "В" },
          { number: "3", text: "RLHF (обучение с подкреплением от человека)", correct: "Б" }
        ],
        rightOptions: [
          { letter: "А", text: "Модель читает массивы текстов из интернета и учится предсказывать следующее слово" },
          { letter: "Б", text: "Люди оценивают ответы модели и ставят 'награды' за хорошие ответы и 'штрафы' за плохие" },
          { letter: "В", text: "Разработчики пишут специальные тексты и задачи, чтобы модель лучше решала практические задачи" }
        ]
      },
      {
        id: 5,
        type: "matching",
        points: 3,
        text: "Сопоставьте понятия с их определениями:",
        items: [
          { number: "1", text: "Контекстное окно", correct: "Б" },
          { number: "2", text: "RAG (Retrieval-Augmented Generation)", correct: "В" },
          { number: "3", text: "Reasoning (рассуждения)", correct: "А" }
        ],
        rightOptions: [
          { letter: "А", text: "Метод, позволяющий модели пошагово рассуждать и проверять логику ответа, используя цепочку мыслей" },
          { letter: "Б", text: "Размер истории диалога и дополнительных данных, которые модель может помнить и учитывать при ответе" },
          { letter: "В", text: "Метод поиска и извлечения актуальной информации из внешних источников для обогащения ответа" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Структура эффективного промпта",
    fullTitle: "Модуль 2. Структура эффективного промпта",
    maxScore: 12,
    questions: [
      {
        id: 6,
        type: "multiple_choice",
        points: 2,
        text: "Для чего нужна роль в структуре промпта?",
        options: [
          { letter: "A", text: "Для указания формата документа" },
          { letter: "B", text: "Для настройки на профессиональный язык и уровень детализации" },
          { letter: "C", text: "Для ограничения количества символов" },
          { letter: "D", text: "Для проверки грамматики" }
        ],
        correctAnswer: "B"
      },
      {
        id: 7,
        type: "multiple_choice",
        points: 2,
        text: "Какая из формулировок задачи является хорошей?",
        options: [
          { letter: "A", text: "Составь отчёт" },
          { letter: "B", text: "Составь отчёт по отклонению расхода материалов" },
          { letter: "C", text: "Напиши что-нибудь про проект" },
          { letter: "D", text: "Сделай анализ" }
        ],
        correctAnswer: "B"
      },
      {
        id: 8,
        type: "multiple_choice",
        points: 2,
        text: "Какой компонент промпта описывает пошаговый процесс?",
        options: [
          { letter: "A", text: "Роль" },
          { letter: "B", text: "Данные" },
          { letter: "C", text: "Инструкция" },
          { letter: "D", text: "Стиль ответа" }
        ],
        correctAnswer: "C"
      },
      {
        id: 9,
        type: "matching",
        points: 3,
        text: "Сопоставьте компоненты с их назначением:",
        items: [
          { number: "1", text: "Формат результата", correct: "Б" },
          { number: "2", text: "Данные", correct: "А" },
          { number: "3", text: "Стиль ответа", correct: "В" }
        ],
        rightOptions: [
          { letter: "А", text: "Входная информация, на основе которой нейросеть будет выполнять задачу" },
          { letter: "Б", text: "Определяет, в каком виде нейросеть должна представить результат" },
          { letter: "В", text: "Задаёт тональность и уровень детализации ответа" }
        ]
      },
      {
        id: 10,
        type: "matching",
        points: 3,
        text: "Сопоставьте форматы с типами задач:",
        items: [
          { number: "1", text: "Таблица", correct: "В" },
          { number: "2", text: "Деловое письмо", correct: "А" },
          { number: "3", text: "Структурированный документ", correct: "Б" }
        ],
        rightOptions: [
          { letter: "А", text: "Переписка с заказчиком, запрос продления сроков" },
          { letter: "Б", text: "Регламенты, инструкции, сводные отчёты по объекту" },
          { letter: "В", text: "Сметы, акты выполненных работ, ведомости материалов" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Контекст и последовательные промпты",
    fullTitle: "Модуль 3. Контекст и последовательные промпты",
    maxScore: 12,
    questions: [
      {
        id: 11,
        type: "multiple_choice",
        points: 2,
        text: "Что такое контекст в работе с нейросетью?",
        options: [
          { letter: "A", text: "Техническая ошибка в коде программы" },
          { letter: "B", text: "\"Память\" нейросети, которая сохраняет все предыдущие вопросы и ответы в одном диалоге" },
          { letter: "C", text: "Размер оперативной памяти компьютера" },
          { letter: "D", text: "Перечень нормативных документов, которые знает нейросеть" }
        ],
        correctAnswer: "B"
      },
      {
        id: 12,
        type: "multiple_choice",
        points: 2,
        text: "Размер контекстного окна --- это:",
        options: [
          { letter: "A", text: "Высота экрана при работе с нейросетью" },
          { letter: "B", text: "Количество документов, которые можно загрузить в диалог" },
          { letter: "C", text: "Объём информации, который модель может одновременно запомнить и учитывать при ответе" },
          { letter: "D", text: "Время ответа нейросети на один запрос" }
        ],
        correctAnswer: "C"
      },
      {
        id: 13,
        type: "multiple_choice",
        points: 2,
        text: "В каком из указанных случаев ЛУЧШЕ всего использовать последовательные промпты?",
        options: [
          { letter: "A", text: "Для быстрого ответа на простой вопрос" },
          { letter: "B", text: "Для создания сложного документа (ТЗ, регламент) пошагово или для многоэтапной аналитики" },
          { letter: "C", text: "Для проверки орфографии текста" },
          { letter: "D", text: "Для перевода текста на другой язык" }
        ],
        correctAnswer: "B"
      },
      {
        id: 14,
        type: "matching",
        points: 3,
        text: "Сопоставьте шаги создания документа методом последовательных промптов с их назначением:",
        items: [
          { number: "1", text: "Задание роли и контекста", correct: "А" },
          { number: "2", text: "Предоставление исходных данных", correct: "Б" },
          { number: "3", text: "Наполнение раздела и смена ролей", correct: "В" }
        ],
        rightOptions: [
          { letter: "А", text: "Определение цели, аудитории и формата документа" },
          { letter: "Б", text: "Передача нейросети всей необходимой информации для работы" },
          { letter: "В", text: "Пошаговое создание разделов с переключением между ролями эксперта и критика" }
        ]
      },
      {
        id: 15,
        type: "matching",
        points: 3,
        text: "Сопоставьте преимущества последовательных промптов с примерами их применения:",
        items: [
          { number: "1", text: "Контроль качества на каждом этапе", correct: "А" },
          { number: "2", text: "Гибкость и адаптивность процесса", correct: "Б" },
          { number: "3", text: "Обучение модели вашему стилю", correct: "В" }
        ],
        rightOptions: [
          { letter: "А", text: "Проверка и корректировка каждого раздела документа перед переходом к следующему" },
          { letter: "Б", text: "Возможность изменить направление работы на основе промежуточных результатов" },
          { letter: "В", text: "Постепенное улучшение понимания моделью ваших требований и предпочтений" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Выбор инструментов и проверка результатов",
    fullTitle: "Модуль 4. Выбор инструментов и проверка результатов",
    maxScore: 12,
    questions: [
      {
        id: 16,
        type: "multiple_choice",
        points: 2,
        text: "Какой из этих форматов ЛУЧШЕ всего использовать для сметы или табличного расчёта, создаваемого с помощью ИИ?",
        options: [
          { letter: "A", text: "Таблица Markdown (с разделителями | )" },
          { letter: "B", text: "Текстовый абзац с перечислением через запятую" },
          { letter: "C", text: "JSON-массив объектов" },
          { letter: "D", text: "HTML-код с тегами <table>" }
        ],
        correctAnswer: "A"
      },
      {
        id: 17,
        type: "multiple_choice",
        points: 2,
        text: "Метод Chain-of-Thought (CoT) --- это:",
        options: [
          { letter: "A", text: "Способ одновременного запроса нескольких нейросетей для сравнения ответов" },
          { letter: "B", text: "Просьба к модели пошагово описать ход своих рассуждений перед финальным ответом" },
          { letter: "C", text: "Автоматическая проверка текста на плагиат и ошибки" },
          { letter: "D", text: "Загрузка большого контекста (документов) в один промпт" }
        ],
        correctAnswer: "B"
      },
      {
        id: 18,
        type: "multiple_choice",
        points: 2,
        text: "Для какого типа задачи в строительстве ЛУЧШЕ всего использовать Perplexity (поиск + генерация)?",
        options: [
          { letter: "A", text: "Переписать внутренний регламент компании в более формальном стиле" },
          { letter: "B", text: "Найти актуальные изменения в СНиПах и подготовить краткую справку" },
          { letter: "C", text: "Составить смету на основе уже имеющихся данных по проекту" },
          { letter: "D", text: "Перевести техническую документацию с английского на русский" }
        ],
        correctAnswer: "B"
      },
      {
        id: 19,
        type: "matching",
        points: 3,
        text: "Сопоставьте типы строительных задач с рекомендуемыми инструментами ИИ:",
        items: [
          { number: "1", text: "Поиск информации о новых стандартах и нормативах", correct: "А" },
          { number: "2", text: "Создание текстовых отчётов, писем, инструкций", correct: "Б" },
          { number: "3", text: "Обработка конфиденциальных данных (сметы с ценами, контракты)", correct: "В" }
        ],
        rightOptions: [
          { letter: "А", text: "Perplexity (поиск + генерация)" },
          { letter: "Б", text: "ChatGPT / Claude (универсальные чат-боты)" },
          { letter: "В", text: "Локальные модели (LM Studio, Ollama)" }
        ]
      },
      {
        id: 20,
        type: "matching",
        points: 3,
        text: "Сопоставьте методы проверки результатов ИИ с их назначением:",
        items: [
          { number: "1", text: "Перекрёстная проверка", correct: "В" },
          { number: "2", text: "Chain-of-Thought (CoT)", correct: "А" },
          { number: "3", text: "Экспертная оценка", correct: "Б" }
        ],
        rightOptions: [
          { letter: "А", text: "Просим модель объяснить логику своих рассуждений пошагово" },
          { letter: "Б", text: "Специалист проверяет результат на соответствие нормам и здравому смыслу" },
          { letter: "В", text: "Сравниваем ответы нескольких моделей или источников" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Локальные модели для конфиденциальных данных",
    fullTitle: "Модуль 5. Локальные модели для конфиденциальных данных",
    maxScore: 12,
    questions: [
      {
        id: 21,
        type: "multiple_choice",
        points: 2,
        text: "Главное преимущество локальных моделей по сравнению с облачными ИИ-сервисами:",
        options: [
          { letter: "A", text: "Локальные модели всегда дают более точные и развёрнутые ответы" },
          { letter: "B", text: "Данные не покидают ваш компьютер, что критично для конфиденциальной информации" },
          { letter: "C", text: "Локальные модели работают быстрее любых облачных сервисов" },
          { letter: "D", text: "Они бесплатны и не требуют установки дополнительного ПО" }
        ],
        correctAnswer: "B"
      },
      {
        id: 22,
        type: "multiple_choice",
        points: 2,
        text: "Для какого типа документов в строительстве НЕОБХОДИМО использовать локальные модели?",
        options: [
          { letter: "A", text: "Публичные инструкции по технике безопасности, доступные всем сотрудникам" },
          { letter: "B", text: "Сметы с коммерческими ценами, условия контрактов, внутренние финансовые отчёты" },
          { letter: "C", text: "Общие вопросы о строительных нормативах (СНиП, ГОСТ)" },
          { letter: "D", text: "Переписка с поставщиками по типовым вопросам" }
        ],
        correctAnswer: "B"
      },
      {
        id: 23,
        type: "multiple_choice",
        points: 2,
        text: "Что такое формат GGUF в контексте локальных моделей?",
        options: [
          { letter: "A", text: "Оптимизированный формат файлов для быстрой загрузки и работы моделей на обычных компьютерах" },
          { letter: "B", text: "Специальный язык программирования для обучения нейросетей" },
          { letter: "C", text: "Тип графического процессора (GPU), необходимый для запуска ИИ" },
          { letter: "D", text: "Облачный сервис для хранения и обработки данных" }
        ],
        correctAnswer: "A"
      },
      {
        id: 24,
        type: "matching",
        points: 3,
        text: "Сопоставьте параметры настройки локальной модели с их функциями:",
        items: [
          { number: "1", text: "Temperature (температура)", correct: "Б" },
          { number: "2", text: "Context Length (длина контекста)", correct: "В" },
          { number: "3", text: "System Prompt", correct: "А" }
        ],
        rightOptions: [
          { letter: "А", text: "Постоянная инструкция, задающая роль и стиль работы модели" },
          { letter: "Б", text: "Управляет креативностью и предсказуемостью ответов модели" },
          { letter: "В", text: "Определяет, сколько текста (токенов) модель может удержать в памяти" }
        ]
      },
      {
        id: 25,
        type: "matching",
        points: 3,
        text: "Сопоставьте размер модели с её характеристиками:",
        items: [
          { number: "1", text: "Модели 7B (например, Llama 3.2)", correct: "Б" },
          { number: "2", text: "Модели 13B и выше", correct: "А" }
        ],
        rightOptions: [
          { letter: "А", text: "Более качественные ответы, лучше понимают сложные задачи, но требуют мощного ПК (от 16 ГБ RAM)" },
          { letter: "Б", text: "Быстрые и лёгкие, подходят для большинства текстовых задач на обычных компьютерах (от 8 ГБ RAM)" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Вайб-кодинг для автоматизации",
    fullTitle: "Модуль 6. Вайб-кодинг для автоматизации в строительстве",
    maxScore: 12,
    questions: [
      {
        id: 26,
        type: "multiple_choice",
        points: 2,
        text: "Что такое вайб-кодинг?",
        options: [
          { letter: "A", text: "Профессиональная разработка сложных корпоративных систем с использованием фреймворков" },
          { letter: "B", text: "Создание простых программ и скриптов с помощью ИИ путём описания задачи на естественном языке" },
          { letter: "C", text: "Специальный язык программирования для строительных расчётов" },
          { letter: "D", text: "Метод автоматического тестирования программного обеспечения" }
        ],
        correctAnswer: "B"
      },
      {
        id: 27,
        type: "multiple_choice",
        points: 2,
        text: "Для каких задач в строительстве вайб-кодинг является ЛУЧШИМ решением?",
        options: [
          { letter: "A", text: "Разработка полноценной ERP-системы для управления всеми процессами компании" },
          { letter: "B", text: "Быстрая автоматизация повторяющихся задач: парсинг таблиц, переименование файлов, простые калькуляторы" },
          { letter: "C", text: "Создание сложных алгоритмов расчёта несущих конструкций" },
          { letter: "D", text: "Написание операционной системы для строительных объектов" }
        ],
        correctAnswer: "B"
      },
      {
        id: 28,
        type: "multiple_choice",
        points: 2,
        text: "Когда вайб-кодинг НЕ ПОДХОДИТ для решения задачи?",
        options: [
          { letter: "A", text: "Нужно быстро создать скрипт для переименования 1000 файлов по шаблону" },
          { letter: "B", text: "Требуется простой калькулятор для расчёта объёма материалов" },
          { letter: "C", text: "Необходима высоконадёжная система с гарантией безопасности данных и долгосрочной поддержкой" },
          { letter: "D", text: "Нужно извлечь данные из PDF-отчёта и сохранить в Excel" }
        ],
        correctAnswer: "C"
      },
      {
        id: 29,
        type: "matching",
        points: 3,
        text: "Сопоставьте типы промптов для вайб-кодинга с их назначением:",
        items: [
          { number: "1", text: "Описание задачи и контекста", correct: "В" },
          { number: "2", text: "Уточнение формата входных и выходных данных", correct: "А" },
          { number: "3", text: "Запрос на исправление ошибок", correct: "Б" }
        ],
        rightOptions: [
          { letter: "А", text: "\"Входные данные — таблица Excel с колонками A, B, C. Результат — JSON-файл.\"" },
          { letter: "Б", text: "\"Скрипт выдаёт ошибку: [текст ошибки]. Как исправить?\"" },
          { letter: "В", text: "\"Напиши Python-скрипт, который извлекает из PDF все таблицы и сохраняет их в CSV\"" }
        ]
      },
      {
        id: 30,
        type: "matching",
        points: 3,
        text: "Сопоставьте этапы жизненного цикла программы с рекомендациями по вайб-кодингу:",
        items: [
          { number: "1", text: "Создание первой версии скрипта", correct: "В" },
          { number: "2", text: "Тестирование и отладка", correct: "А" },
          { number: "3", text: "Долгосрочное использование и поддержка", correct: "Б" }
        ],
        rightOptions: [
          { letter: "А", text: "Запускаем на тестовых данных, копируем ошибки в промпт для исправления" },
          { letter: "Б", text: "Если скрипт стал критичным для бизнеса, стоит передать его программисту для доработки" },
          { letter: "В", text: "Чётко описываем задачу, формат данных и желаемый результат в одном промпте" }
        ]
      }
    ]
  }
];

// Current test state
let currentModule = null;
let currentQuestionIndex = 0;
let userAnswers = {};

// Initialize app
function initApp() {
  loadScores();
  loadUserInfo();
  showDashboard();
  setupNavigationListeners();
  updateTotalScore();
  showPersistenceWarning();
}

// Setup navigation event listeners
function setupNavigationListeners() {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  console.log('=== Setting up navigation listeners ===');
  
  if (prevButton) {
    // Clone to remove all existing listeners
    const newPrevButton = prevButton.cloneNode(true);
    prevButton.parentNode.replaceChild(newPrevButton, prevButton);
    
    newPrevButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('=== Previous button clicked ===');
      console.log('Current question:', currentQuestionIndex + 1);
      navigateToPrevious();
    });
    console.log('✓ Previous button listener attached');
  } else {
    console.error('❌ Previous button not found');
  }
  
  if (nextButton) {
    // Clone to remove all existing listeners (CRITICAL for fixing stuck handlers)
    const newNextButton = nextButton.cloneNode(true);
    nextButton.parentNode.replaceChild(newNextButton, nextButton);
    
    newNextButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('=== NEXT/SUBMIT BUTTON CLICKED ===');
      console.log('Module ID:', currentModule ? currentModule.id : 'none');
      console.log('Current question index:', currentQuestionIndex);
      console.log('Question number:', currentQuestionIndex + 1);
      console.log('Total questions:', currentModule ? currentModule.questions.length : 'none');
      console.log('Button text:', newNextButton.textContent);
      console.log('Is last question?', currentQuestionIndex === (currentModule.questions.length - 1));
      console.log('>>> Calling navigateToNext() NOW <<<');
      
      try {
        navigateToNext();
        console.log('>>> navigateToNext() completed <<<');
      } catch (error) {
        console.error('ERROR in navigateToNext():', error);
      }
    }, false);
    
    // Force button to be clickable
    newNextButton.disabled = false;
    newNextButton.style.pointerEvents = 'auto';
    newNextButton.style.opacity = '1';
    newNextButton.style.cursor = 'pointer';
    
    console.log('✓ Next/Submit button listener attached (fresh, forced clickable)');
  } else {
    console.error('❌ Next button not found');
  }
}

// Show dashboard
function showDashboard() {
  document.getElementById('dashboardView').classList.remove('hidden');
  document.getElementById('testView').classList.add('hidden');
  renderModulesGrid();
  updateTotalScore();
  loadUserInfo();
}

// Render modules grid
function renderModulesGrid() {
  const grid = document.getElementById('modulesGrid');
  let html = '';
  
  modulesData.forEach((module, index) => {
    const score = moduleScores[module.id];
    const percentage = Math.round((score / module.maxScore) * 100);
    const displayNumber = module.id;
    
    html += `
      <div class="module-card">
        <div class="module-header">
          <div class="module-number">Модуль ${displayNumber}</div>
          <h3 class="module-title">${module.title}</h3>
        </div>
        
        <div class="score-display">
          <div class="score-text">${score}/${module.maxScore}</div>
          <div class="score-label">баллов</div>
        </div>
        
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${percentage}%"></div>
        </div>
        
        <button class="btn btn-primary" onclick="startModule('${module.id}')">
          📝 Пройти тест
        </button>
      </div>
    `;
  });
  
  grid.innerHTML = html;
}

// Start module test
function startModule(moduleId) {
  // Convert to number if it's a numeric string
  const normalizedId = (typeof moduleId === 'string') ? parseInt(moduleId) : moduleId;
  currentModule = modulesData.find(m => m.id === normalizedId);
  currentQuestionIndex = 0;
  userAnswers = {};
  
  console.log('=== Starting Module', moduleId, 'with', currentModule.questions.length, 'questions ===');
  
  // Show test view
  document.getElementById('dashboardView').classList.add('hidden');
  document.getElementById('testView').classList.remove('hidden');
  
  // FIXED: Restore navigation with explicit display style to override any previous inline styles
  const navigationDiv = document.getElementById('navigation');
  if (navigationDiv) {
    navigationDiv.classList.remove('hidden');
    navigationDiv.style.display = 'flex'; // Explicitly set to flex
  }
  
  // Set module title
  document.getElementById('testModuleTitle').textContent = currentModule.fullTitle;
  
  // Re-setup navigation listeners to ensure they work
  setupNavigationListeners();
  
  // Initialize first question
  renderQuestion();
  updateProgress();
  updateNavigation();
  
  console.log('Module started successfully, showing Q1');
}

// Render current question
function renderQuestion() {
  const question = currentModule.questions[currentQuestionIndex];
  const container = document.getElementById('questionContainer');
  
  if (question.type === 'multiple_choice') {
    container.innerHTML = renderMultipleChoice(question);
  } else if (question.type === 'matching') {
    container.innerHTML = renderMatching(question);
  }
}

// Render multiple choice question
function renderMultipleChoice(question) {
  const selectedAnswer = userAnswers[question.id];
  
  let html = `
    <div class="question-card">
      <div class="question-number">Вопрос ${currentQuestionIndex + 1} из ${currentModule.questions.length}</div>
      <h2 class="question-text">${question.text}</h2>
      <div class="options-container">
  `;
  
  question.options.forEach(option => {
    const isSelected = selectedAnswer === option.letter;
    html += `
      <button class="option-button ${isSelected ? 'selected' : ''}" 
              onclick="selectAnswer(${question.id}, '${option.letter}')">
        <span class="option-letter">${option.letter}.</span>
        <span class="option-text">${option.text}</span>
      </button>
    `;
  });
  
  html += `</div></div>`;
  return html;
}

// Render matching question
function renderMatching(question) {
  let html = `
    <div class="question-card">
      <div class="question-number">Вопрос ${currentQuestionIndex + 1} из ${currentModule.questions.length}</div>
      <h2 class="question-text">${question.text}</h2>
      <div class="matching-container">
        <div class="matching-column">
          <div class="column-title">Утверждения</div>
  `;
  
  question.items.forEach(item => {
    const selectedMatch = userAnswers[question.id] ? userAnswers[question.id][item.number] : '';
    html += `
      <div class="matching-item">
        <div class="matching-item-number">${item.number}.</div>
        <div>${item.text}</div>
        <select class="matching-select" onchange="selectMatch(${question.id}, '${item.number}', this.value)">
          <option value="">Выберите соответствие...</option>
    `;
    
    question.rightOptions.forEach(opt => {
      const isSelected = selectedMatch === opt.letter;
      html += `<option value="${opt.letter}" ${isSelected ? 'selected' : ''}>${opt.letter}. ${opt.text}</option>`;
    });
    
    html += `</select></div>`;
  });
  
  html += `</div><div class="matching-column"><div class="column-title">Определения</div>`;
  
  question.rightOptions.forEach(opt => {
    html += `
      <div class="right-option">
        <div class="right-option-letter">${opt.letter}.</div>
        <div>${opt.text}</div>
      </div>
    `;
  });
  
  html += `</div></div></div>`;
  return html;
}

// Select answer for multiple choice
function selectAnswer(questionId, answer) {
  userAnswers[questionId] = answer;
  renderQuestion();
}

// Select match for matching question
function selectMatch(questionId, itemNumber, selectedLetter) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = {};
  }
  userAnswers[questionId][itemNumber] = selectedLetter;
}

// Navigation
function navigateToPrevious() {
  // On Q1, Back button exits to dashboard
  if (currentQuestionIndex === 0) {
    console.log('Q1 Back button clicked - returning to dashboard');
    returnToDashboard();
    return;
  }
  
  // On Q2-Q5, Back button goes to previous question
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    updateProgress();
    updateNavigation();
  }
}

function navigateToNext() {
  console.log('=== navigateToNext CALLED ===');
  console.log('currentQuestionIndex:', currentQuestionIndex);
  console.log('total questions:', currentModule.questions.length);
  console.log('Current module ID:', currentModule.id);
  console.log('User answers so far:', userAnswers);
  
  // Check if we're on the last question (index 4 for 5 questions)
  const isLastQuestion = (currentQuestionIndex === currentModule.questions.length - 1);
  console.log('Is last question?', isLastQuestion, '(checking', currentQuestionIndex, '===', currentModule.questions.length - 1, ')');
  
  if (isLastQuestion) {
    console.log('=== ON LAST QUESTION - VALIDATING ALL ANSWERS ===');
    console.log('Module ID:', currentModule.id);
    
    // VALIDATION: Check if all questions have been answered
    const validationResult = validateAllAnswers();
    
    if (!validationResult.isValid) {
      console.log('❌ VALIDATION FAILED - Not all questions answered');
      console.log('Unanswered questions:', validationResult.unansweredQuestions);
      showValidationError(validationResult.unansweredQuestions);
      return; // Stop navigation, show error
    }
    
    console.log('✓ VALIDATION PASSED - All questions answered');
    console.log('Calculating score now...');
    
    // Calculate score
    const score = calculateScore();
    moduleScores[currentModule.id] = score;
    
    console.log('Module', currentModule.id, 'final score:', score);
    console.log('Calling showResults() now...');
    
    // Show results
    showResults();
    console.log('showResults() completed');
    return;
  }
  
  // Otherwise move to next question
  console.log('Moving to next question (not last yet)');
  currentQuestionIndex++;
  renderQuestion();
  updateProgress();
  updateNavigation();
}

// Update navigation buttons
function updateNavigation() {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  console.log('=== updateNavigation called ===');
  console.log('Question:', currentQuestionIndex + 1, '/', currentModule.questions.length);
  
  // Previous button is always enabled (Q1 exits to dashboard, Q2+ goes back)
  if (prevButton) {
    prevButton.disabled = false;
    prevButton.textContent = '← Назад';
  }
  
  // Update next button based on question position
  if (nextButton) {
    const isLastQuestion = (currentQuestionIndex === currentModule.questions.length - 1);
    
    console.log('Is last question check:', currentQuestionIndex, '===', currentModule.questions.length - 1, '=', isLastQuestion);
    
    if (isLastQuestion) {
      nextButton.textContent = 'Завершить';
      console.log('✓✓✓ Button text set to: Завершить (Q5 - SUBMIT BUTTON)');
    } else {
      nextButton.textContent = 'Далее →';
      console.log('✓ Button text set to: Далее → (Q' + (currentQuestionIndex + 1) + ')');
    }
    
    // CRITICAL: Force button to be enabled and clickable - NO VALIDATION
    nextButton.disabled = false;
    nextButton.style.pointerEvents = 'auto';
    nextButton.style.opacity = '1';
    nextButton.style.cursor = 'pointer';
    nextButton.classList.remove('disabled');
    nextButton.setAttribute('tabindex', '0');
    
    console.log('✓✓✓ Next/Submit button is FORCE ENABLED and CLICKABLE');
    console.log('Button disabled attr:', nextButton.disabled);
    console.log('Button text:', nextButton.textContent);
  } else {
    console.error('❌ Next button not found in DOM!');
  }
}

// Update progress
function updateProgress() {
  const counter = document.getElementById('questionCounter');
  const progressBar = document.getElementById('progressBar');
  
  counter.textContent = `Вопрос ${currentQuestionIndex + 1} из ${currentModule.questions.length}`;
  
  const progress = ((currentQuestionIndex + 1) / currentModule.questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Validate that all questions have been answered
function validateAllAnswers() {
  console.log('=== VALIDATING ALL ANSWERS ===');
  const unansweredQuestions = [];
  
  currentModule.questions.forEach((question, index) => {
    console.log(`Checking Q${index + 1} (ID: ${question.id}, Type: ${question.type})`);
    
    if (question.type === 'multiple_choice') {
      const answer = userAnswers[question.id];
      console.log(`  Multiple choice answer:`, answer);
      
      // Check if answer exists and is a valid letter
      if (!answer || !['A', 'B', 'C', 'D'].includes(answer)) {
        console.log(`  ❌ Q${index + 1} is UNANSWERED or INVALID`);
        unansweredQuestions.push({
          number: index + 1,
          id: question.id,
          type: 'multiple_choice',
          text: question.text
        });
      } else {
        console.log(`  ✓ Q${index + 1} is answered`);
      }
    } else if (question.type === 'matching') {
      const matches = userAnswers[question.id] || {};
      console.log(`  Matching answers:`, matches);
      
      // Check if all items have valid selections
      let allItemsAnswered = true;
      question.items.forEach(item => {
        const selectedMatch = matches[item.number];
        console.log(`    Item ${item.number}: ${selectedMatch || 'NONE'}`);
        
        // Check if selection exists and is not empty/placeholder
        if (!selectedMatch || selectedMatch === '' || selectedMatch === 'Выберите соответствие...') {
          allItemsAnswered = false;
          console.log(`    ❌ Item ${item.number} is UNANSWERED`);
        }
      });
      
      if (!allItemsAnswered) {
        console.log(`  ❌ Q${index + 1} has UNANSWERED items`);
        unansweredQuestions.push({
          number: index + 1,
          id: question.id,
          type: 'matching',
          text: question.text
        });
      } else {
        console.log(`  ✓ Q${index + 1} all items answered`);
      }
    }
  });
  
  const isValid = unansweredQuestions.length === 0;
  console.log('=== VALIDATION RESULT ===');
  console.log('Valid:', isValid);
  console.log('Unanswered questions:', unansweredQuestions);
  
  return {
    isValid: isValid,
    unansweredQuestions: unansweredQuestions
  };
}

// Show validation error dialog
function showValidationError(unansweredQuestions) {
  console.log('=== SHOWING VALIDATION ERROR DIALOG ===');
  
  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'validationModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: var(--space-24);
  `;
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background-color: var(--color-surface);
    border-radius: var(--radius-lg);
    padding: var(--space-32);
    max-width: 500px;
    width: 100%;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--color-warning);
  `;
  
  // Build list of unanswered questions
  let questionsList = '<ul style="margin: var(--space-16) 0; padding-left: var(--space-24); color: var(--color-text-secondary);">';
  unansweredQuestions.forEach(q => {
    questionsList += `<li style="margin-bottom: var(--space-8);">Вопрос ${q.number}: ${q.text.substring(0, 60)}${q.text.length > 60 ? '...' : ''}</li>`;
  });
  questionsList += '</ul>';
  
  modalContent.innerHTML = `
    <div style="text-align: center; margin-bottom: var(--space-24);">
      <div style="font-size: 48px; margin-bottom: var(--space-16);">⚠️</div>
      <h2 style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-text); margin-bottom: var(--space-16);">
        Проверьте все вопросы
      </h2>
      <p style="font-size: var(--font-size-base); color: var(--color-text); line-height: var(--line-height-normal); margin-bottom: var(--space-16);">
        Вы ответили не на все вопросы модуля. Пожалуйста, выберите вариант ответа на каждый вопрос перед отправкой.
      </p>
      ${questionsList}
      <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); font-style: italic;">
        Используйте кнопку "Назад" для возврата к неотвеченным вопросам.
      </p>
    </div>
    <button id="closeValidationModal" class="btn btn-primary" style="width: 100%; font-size: var(--font-size-lg); padding: var(--space-16);">
      Понятно
    </button>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Close modal on button click
  document.getElementById('closeValidationModal').addEventListener('click', function() {
    console.log('Closing validation modal');
    document.body.removeChild(modal);
    // User stays on Q5, can go back to answer questions
  });
  
  // Close modal on overlay click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('Closing validation modal (overlay click)');
      document.body.removeChild(modal);
    }
  });
}

// Calculate score with new scoring system
// IMPORTANT: This function handles unanswered questions gracefully
// Unanswered questions simply score 0 points - no validation required
function calculateScore() {
  let totalScore = 0;
  
  console.log('=== Calculating Score ===');
  console.log('Total questions:', currentModule.questions.length);
  console.log('User answers:', userAnswers);
  
  currentModule.questions.forEach((question, index) => {
    console.log(`Question ${index + 1} (ID ${question.id}):`);
    
    if (question.type === 'multiple_choice') {
      const userAnswer = userAnswers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;
      
      console.log(`  Type: Multiple Choice`);
      console.log(`  User answer: ${userAnswer || 'NOT ANSWERED'}`);
      console.log(`  Correct answer: ${question.correctAnswer}`);
      console.log(`  Points: ${isCorrect ? 2 : 0}`);
      
      if (isCorrect) {
        totalScore += 2; // 2 points for correct multiple choice
      }
      // If no answer or wrong answer: 0 points (implicit)
    } else if (question.type === 'matching') {
      const userMatches = userAnswers[question.id] || {};
      let questionScore = 0;
      
      console.log(`  Type: Matching`);
      console.log(`  User matches:`, userMatches);
      
      // Check each matching item independently
      question.items.forEach(item => {
        const userMatch = userMatches[item.number];
        const isCorrect = userMatch === item.correct;
        
        console.log(`    Item ${item.number}: user=${userMatch || 'NONE'}, correct=${item.correct}, match=${isCorrect}`);
        
        if (isCorrect) {
          totalScore += 1; // 1 point per correct match
          questionScore += 1;
        }
      });
      
      console.log(`  Total points for this question: ${questionScore}/${question.items.length}`);
    }
  });
  
  console.log('=== Total Score:', totalScore, '/', currentModule.maxScore, '===');
  return totalScore;
}

// Show results
// IMPORTANT: This function displays results regardless of whether all questions were answered
function showResults() {
  console.log('=== showResults called ===');
  console.log('Module ID:', currentModule.id);
  console.log('Module title:', currentModule.title);
  
  // Calculate score (this will log detailed scoring info)
  const score = calculateScore();
  const percentage = Math.round((score / currentModule.maxScore) * 100);
  
  console.log('Final display score:', score, '/', currentModule.maxScore);
  console.log('Percentage:', percentage, '%');
  console.log('Generating results HTML...');
  
  // Update module score
  moduleScores[currentModule.id] = score;
  
  // Save scores to localStorage
  saveScores();
  
  let html = `
    <div class="question-card" style="max-width: 100%;">
      <h2 class="question-text" style="text-align: center; margin-bottom: var(--space-32); color: var(--color-primary);">
        Результаты тестирования
      </h2>
      
      <div style="background-color: var(--color-bg-1); padding: var(--space-24); border-radius: var(--radius-md); margin-bottom: var(--space-32); text-align: center;">
        <div style="font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); color: var(--color-text); margin-bottom: var(--space-12);">
          ${score} из ${currentModule.maxScore} баллов
        </div>
        <div style="font-size: var(--font-size-xl); color: var(--color-text-secondary);">
          ${percentage}% правильных ответов
        </div>
      </div>
      
      <h3 style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-20); color: var(--color-text);">
        Обзор ответов:
      </h3>
  `;
  
  currentModule.questions.forEach((question, index) => {
    const questionScore = getQuestionScore(question);
    const maxPoints = question.points;
    const isFullyCorrect = questionScore === maxPoints;
    const bgColor = isFullyCorrect ? 'var(--color-bg-3)' : 'var(--color-bg-4)';
    const statusColor = isFullyCorrect ? 'var(--color-success)' : 'var(--color-error)';
    
    html += `
      <div style="background-color: ${bgColor}; padding: var(--space-20); border-radius: var(--radius-md); margin-bottom: var(--space-16); border: 2px solid ${statusColor}33;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-12);">
          <div style="font-weight: var(--font-weight-semibold); color: var(--color-text);">Вопрос ${index + 1}</div>
          <div style="color: ${statusColor}; font-weight: var(--font-weight-bold);">${questionScore}/${maxPoints} баллов</div>
        </div>
        <div style="font-size: var(--font-size-base); color: var(--color-text); margin-bottom: var(--space-16);">
          ${question.text}
        </div>
    `;
    
    if (question.type === 'multiple_choice') {
      html += renderMultipleChoiceResults(question);
    } else if (question.type === 'matching') {
      html += renderMatchingResults(question);
    }
    
    html += `</div>`;
  });
  
  html += `
      <div style="margin-top: var(--space-32); padding-top: var(--space-24); border-top: 2px solid var(--color-border); display: flex; gap: var(--space-16); justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-secondary" onclick="returnToDashboard()" style="flex: 1; max-width: 300px; min-width: 200px;">Вернуться на главную</button>
        <button class="btn btn-primary" onclick="retakeTest()" style="flex: 1; max-width: 300px; min-width: 200px;">Пройти тест заново</button>
      </div>
    </div>
  `;
  
  document.getElementById('questionContainer').innerHTML = html;
  
  // Hide the main navigation (Назад/Завершить buttons) - results screen has its own buttons
  const navigationDiv = document.getElementById('navigation');
  if (navigationDiv) {
    navigationDiv.classList.add('hidden');
    // FIXED: Removed inline style to prevent override issues when restarting modules
  }
}

// Get question score
// Handles unanswered questions gracefully (returns 0)
function getQuestionScore(question) {
  if (question.type === 'multiple_choice') {
    const userAnswer = userAnswers[question.id];
    // If no answer provided, score is 0
    if (!userAnswer) return 0;
    // If answer matches correct answer, score is 2
    return userAnswer === question.correctAnswer ? 2 : 0;
  } else if (question.type === 'matching') {
    const userMatches = userAnswers[question.id] || {};
    let score = 0;
    // Each correct match is worth 1 point
    question.items.forEach(item => {
      const userMatch = userMatches[item.number];
      // If no match selected, no points
      if (!userMatch) return;
      // If match is correct, add 1 point
      if (userMatch === item.correct) {
        score += 1;
      }
    });
    return score;
  }
  return 0;
}

// Render multiple choice results
function renderMultipleChoiceResults(question) {
  const userAnswer = userAnswers[question.id] || null;
  let html = '<div style="margin-top: var(--space-12);">';
  
  question.options.forEach(option => {
    const isCorrect = option.letter === question.correctAnswer;
    const isUserAnswer = option.letter === userAnswer;
    let style = 'padding: var(--space-12); margin-bottom: var(--space-8); border-radius: var(--radius-sm); ';
    
    if (isCorrect) {
      style += 'background-color: rgba(var(--color-success-rgb), 0.2); border: 2px solid var(--color-success);';
    } else if (isUserAnswer) {
      style += 'background-color: rgba(var(--color-error-rgb), 0.2); border: 2px solid var(--color-error);';
    } else {
      style += 'background-color: var(--color-surface); border: 1px solid var(--color-border);';
    }
    
    html += `
      <div style="${style}">
        <strong>${option.letter}.</strong> ${option.text}
        ${isCorrect ? ' <strong style="color: var(--color-success);">✓ Правильный ответ</strong>' : ''}
        ${isUserAnswer && !isCorrect ? ' <strong style="color: var(--color-error);">✗ Ваш ответ</strong>' : ''}
      </div>
    `;
  });
  
  if (!userAnswer) {
    html += '<div style="color: var(--color-warning); margin-top: var(--space-12); padding: var(--space-12); background-color: rgba(var(--color-warning-rgb), 0.1); border-radius: var(--radius-sm); font-style: italic; font-weight: var(--font-weight-medium);">⚠️ Вы не ответили на этот вопрос (0 баллов)</div>';
  }
  
  html += '</div>';
  return html;
}

// Render matching results
function renderMatchingResults(question) {
  const userMatches = userAnswers[question.id] || {};
  let html = '<div style="margin-top: var(--space-12);">';
  
  question.items.forEach(item => {
    const correctAnswer = item.correct;
    const userAnswer = userMatches[item.number];
    const isCorrect = correctAnswer === userAnswer;
    const isUnanswered = !userAnswer;
    
    // Color coding: green for correct, red for incorrect, orange for unanswered
    let bgColor, borderColor;
    if (isCorrect) {
      bgColor = 'rgba(var(--color-success-rgb), 0.15)';
      borderColor = 'var(--color-success)';
    } else if (isUnanswered) {
      bgColor = 'rgba(var(--color-warning-rgb), 0.15)';
      borderColor = 'var(--color-warning)';
    } else {
      bgColor = 'rgba(var(--color-error-rgb), 0.15)';
      borderColor = 'var(--color-error)';
    }
    
    html += `
      <div style="background-color: ${bgColor}; border: 2px solid ${borderColor}; padding: var(--space-16); margin-bottom: var(--space-12); border-radius: var(--radius-sm);">
        <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8);">
          ${item.number}. ${item.text}
        </div>
    `;
    
    // Show user's answer if they answered (and it was wrong)
    if (userAnswer && !isCorrect) {
      const userOption = question.rightOptions.find(opt => opt.letter === userAnswer);
      html += `
        <div style="color: var(--color-error); margin-bottom: var(--space-8);">
          ✗ Ваш ответ: ${userOption ? userOption.letter + '. ' + userOption.text : 'Неизвестно'}
        </div>
      `;
    }
    
    // Show if unanswered
    if (isUnanswered) {
      html += `
        <div style="color: var(--color-warning); margin-bottom: var(--space-8); font-style: italic;">
          ⚠️ Не отвечено (0 баллов)
        </div>
      `;
    }
    
    // Always show correct answer
    const correctOption = question.rightOptions.find(opt => opt.letter === correctAnswer);
    html += `
        <div style="color: var(--color-success); font-weight: var(--font-weight-medium);">
          ✓ Правильно: ${correctOption.letter}. ${correctOption.text}
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

// Return to dashboard
function returnToDashboard() {
  showDashboard();
}

// Retake test
function retakeTest() {
  currentQuestionIndex = 0;
  userAnswers = {};
  
  // Show navigation buttons again (Назад/Далее for questions)
  const navigationDiv = document.getElementById('navigation');
  if (navigationDiv) {
    navigationDiv.classList.remove('hidden');
    navigationDiv.style.display = 'flex'; // Explicitly restore display
  }
  
  renderQuestion();
  updateProgress();
  updateNavigation();
}

// Save user info with persistence attempt
function saveUserInfo() {
  userInfo.name = document.getElementById('userName').value || '';
  userInfo.lastName = document.getElementById('userLastName').value || '';
  userInfo.email = document.getElementById('userEmail').value || '';
  console.log('User info saved:', userInfo);
  
  // Primary: Try localStorage
  try {
    const storage = window.localStorage;
    storage.setItem('userInfo', JSON.stringify(userInfo));
    console.log('✓ User info saved to localStorage');
    return;
  } catch (e) {
    console.warn('⚠️ localStorage not available:', e.message);
  }
  
  // Fallback: Session memory
  sessionData.userInfo = JSON.parse(JSON.stringify(userInfo));
  console.log('✓ User info saved to session memory');
}

// Load user info from storage and populate form
function loadUserInfo() {
  // Primary: Try localStorage
  try {
    const storage = window.localStorage;
    const saved = storage.getItem('userInfo');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(userInfo, parsed);
      console.log('✓ User info loaded from localStorage:', userInfo);
    }
  } catch (e) {
    console.warn('⚠️ localStorage not available:', e.message);
    // Fallback: Session memory
    if (sessionData.userInfo) {
      Object.assign(userInfo, sessionData.userInfo);
      console.log('✓ User info loaded from session memory');
    }
  }
  
  // Populate form fields
  const nameField = document.getElementById('userName');
  const lastNameField = document.getElementById('userLastName');
  const emailField = document.getElementById('userEmail');
  
  if (nameField) nameField.value = userInfo.name;
  if (lastNameField) lastNameField.value = userInfo.lastName;
  if (emailField) emailField.value = userInfo.email;
}

// Calculate and update total score display
function updateTotalScore() {
  // Calculate total score from all modules
  const totalScore = moduleScores[1] + moduleScores[2] + moduleScores[3] + 
                     moduleScores[4] + moduleScores[5] + moduleScores[6];
  const maxScore = 72; // 6 modules × 12 points each
  const percentage = Math.round((totalScore / maxScore) * 100);
  
  // Update display elements
  const scoreNumberEl = document.getElementById('totalScoreNumber');
  const scorePercentageEl = document.getElementById('totalScorePercentage');
  const progressBarEl = document.getElementById('totalProgressBar');
  
  if (scoreNumberEl) {
    scoreNumberEl.textContent = `${totalScore}/72`;
  }
  
  if (scorePercentageEl) {
    scorePercentageEl.textContent = `${percentage}%`;
  }
  
  if (progressBarEl) {
    progressBarEl.style.width = `${percentage}%`;
  }
  
  console.log('Total score updated:', totalScore, '/', maxScore, '=', percentage, '%');
}

// Automated testing function
function runAutomatedTest() {
  console.log('=== STARTING AUTOMATED TEST ===');
  console.log('Testing all 6 modules with perfect scores');
  
  // Reset all scores
  moduleScores[1] = 0;
  moduleScores[2] = 0;
  moduleScores[3] = 0;
  moduleScores[4] = 0;
  moduleScores[5] = 0;
  moduleScores[6] = 0;
  
  // Test each module sequentially
  testModuleSequence(1);
}

function testModuleSequence(moduleId) {
  if (moduleId > 6) {
    console.log('=== ALL MODULES TESTED ===');
    console.log('Final scores:', moduleScores);
    const totalScore = moduleScores[1] + moduleScores[2] + moduleScores[3] + moduleScores[4] + moduleScores[5] + moduleScores[6];
    console.log('TOTAL SCORE:', totalScore, '/ 72');
    
    // Show final dashboard
    showDashboard();
    
    // Display test results in a modal
    showTestResultsModal(totalScore);
    return;
  }
  
  console.log(`\n=== TESTING MODULE ${moduleId} ===`);
  const module = modulesData.find(m => m.id === moduleId);
  
  // Start the module
  currentModule = module;
  currentQuestionIndex = 0;
  userAnswers = {};
  
  // Fill all correct answers
  module.questions.forEach(question => {
    if (question.type === 'multiple_choice') {
      userAnswers[question.id] = question.correctAnswer;
      console.log(`Q${question.id}: Selected ${question.correctAnswer} (correct)`);
    } else if (question.type === 'matching') {
      userAnswers[question.id] = {};
      question.items.forEach(item => {
        userAnswers[question.id][item.number] = item.correct;
        console.log(`Q${question.id} Item ${item.number}: Matched ${item.correct} (correct)`);
      });
    }
  });
  
  // Calculate score
  const score = calculateScore();
  moduleScores[module.id] = score;
  console.log(`Module ${moduleId} Score: ${score}/${module.maxScore}`);
  
  // Continue to next module
  setTimeout(() => testModuleSequence(moduleId + 1), 100);
}

function showTestResultsModal(totalScore) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: var(--space-24);
  `;
  
  const isPerfectScore = totalScore === 72;
  const percentage = Math.round((totalScore / 72) * 100);
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background-color: var(--color-surface);
    border-radius: var(--radius-lg);
    padding: var(--space-32);
    max-width: 600px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 3px solid ${isPerfectScore ? 'var(--color-success)' : 'var(--color-warning)'};
  `;
  
  let detailsHtml = '<div style="margin: var(--space-24) 0; padding: var(--space-20); background-color: var(--color-bg-1); border-radius: var(--radius-md);">';
  for (let i = 1; i <= 6; i++) {
    const score = moduleScores[i];
    const statusIcon = score === 12 ? '✓' : '⚠️';
    const statusColor = score === 12 ? 'var(--color-success)' : 'var(--color-warning)';
    detailsHtml += `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-12); padding: var(--space-8); background-color: var(--color-surface); border-radius: var(--radius-sm);">
        <span style="font-weight: var(--font-weight-medium); color: var(--color-text);">Модуль ${i}</span>
        <span style="font-weight: var(--font-weight-bold); color: ${statusColor};">${statusIcon} ${score}/12 баллов</span>
      </div>
    `;
  }
  detailsHtml += '</div>';
  
  modalContent.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 64px; margin-bottom: var(--space-16);">${isPerfectScore ? '🎉' : '📊'}</div>
      <h2 style="font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); color: var(--color-text); margin-bottom: var(--space-16);">
        ${isPerfectScore ? 'Тестирование завершено успешно!' : 'Тестирование завершено'}
      </h2>
      <div style="background: linear-gradient(135deg, var(--color-primary), var(--color-teal-700)); color: white; padding: var(--space-24); border-radius: var(--radius-lg); margin-bottom: var(--space-20);">
        <div style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-8);">
          ${totalScore} / 72
        </div>
        <div style="font-size: var(--font-size-xl);">
          ${percentage}% правильных ответов
        </div>
      </div>
      ${detailsHtml}
      <div style="padding: var(--space-16); background-color: ${isPerfectScore ? 'rgba(var(--color-success-rgb), 0.15)' : 'rgba(var(--color-warning-rgb), 0.15)'}; border-radius: var(--radius-md); margin-bottom: var(--space-24); border: 2px solid ${isPerfectScore ? 'var(--color-success)' : 'var(--color-warning)'};">
        <p style="font-size: var(--font-size-base); color: var(--color-text); line-height: var(--line-height-normal); margin: 0;">
          ${isPerfectScore 
            ? '<strong>✓ Проверка пройдена:</strong> Все модули набрали максимальные 12 баллов. Итоговый результат 72/72 (100%) отображается корректно на главной странице.' 
            : '<strong>⚠️ Внимание:</strong> Не все модули набрали максимальные баллы. Проверьте правильность ответов.'}
        </p>
      </div>
      <button id="closeTestModal" class="btn btn-primary" style="width: 100%; font-size: var(--font-size-lg); padding: var(--space-16);">
        Закрыть и вернуться на главную
      </button>
    </div>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  document.getElementById('closeTestModal').addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

// Session storage fallback (in-memory simulation)
const sessionData = {
  moduleScores: null,
  userInfo: null
};

// Save scores with fallback
function saveScores() {
  // Primary: Try localStorage
  try {
    const storage = window.localStorage;
    storage.setItem('moduleScores', JSON.stringify(moduleScores));
    console.log('✓ Module scores saved to localStorage:', moduleScores);
    return;
  } catch (e) {
    console.warn('⚠️ localStorage not available:', e.message);
  }
  
  // Fallback: Session memory
  sessionData.moduleScores = JSON.parse(JSON.stringify(moduleScores));
  console.log('✓ Scores saved to session memory (will clear on refresh)');
}

// Load scores with fallback
function loadScores() {
  // Primary: Try localStorage
  try {
    const storage = window.localStorage;
    const saved = storage.getItem('moduleScores');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(moduleScores, parsed);
      console.log('✓ Module scores loaded from localStorage:', moduleScores);
      return;
    }
  } catch (e) {
    console.warn('⚠️ localStorage not available:', e.message);
  }
  
  // Fallback: Session memory
  if (sessionData.moduleScores) {
    Object.assign(moduleScores, sessionData.moduleScores);
    console.log('✓ Scores loaded from session memory');
  }
}

// Show clear confirmation dialog
function showClearConfirmation() {
  console.log('=== CLEAR CONFIRMATION DIALOG ===');
  
  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'clearConfirmModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: var(--space-24);
  `;
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background-color: var(--color-surface);
    border-radius: var(--radius-lg);
    padding: var(--space-32);
    max-width: 500px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 3px solid var(--color-error);
  `;
  
  modalContent.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 64px; margin-bottom: var(--space-16);">⚠️</div>
      <h2 style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-text); margin-bottom: var(--space-16);">
        Вы уверены?
      </h2>
      <p style="font-size: var(--font-size-lg); color: var(--color-text); line-height: 1.6; margin-bottom: var(--space-24);">
        Это действие удалит <strong>все баллы и результаты тестов</strong> по всем модулям, а также информацию о пользователе.
      </p>
      <p style="font-size: var(--font-size-base); color: var(--color-text-secondary); margin-bottom: var(--space-32); font-style: italic;">
        Отменить это действие будет невозможно.
      </p>
      <div style="display: flex; gap: var(--space-16); justify-content: center;">
        <button id="confirmClearNo" class="btn btn-secondary" style="flex: 1; max-width: 200px; padding: var(--space-16); font-size: var(--font-size-lg);">
          Нет
        </button>
        <button id="confirmClearYes" class="btn" style="flex: 1; max-width: 200px; padding: var(--space-16); font-size: var(--font-size-lg); background-color: var(--color-error); color: white; font-weight: var(--font-weight-bold);">
          Да, очистить
        </button>
      </div>
    </div>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // "No" button - close modal
  document.getElementById('confirmClearNo').addEventListener('click', function() {
    console.log('User clicked NO - canceling clear');
    document.body.removeChild(modal);
  });
  
  // "Yes" button - clear all data
  document.getElementById('confirmClearYes').addEventListener('click', function() {
    console.log('User clicked YES - clearing all data');
    clearAllResults();
    document.body.removeChild(modal);
  });
  
  // Close on overlay click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('User clicked overlay - canceling clear');
      document.body.removeChild(modal);
    }
  });
}

// Clear all results
function clearAllResults() {
  console.log('=== CLEARING ALL RESULTS ===');
  
  // Reset all module scores to 0
  for (let i = 1; i <= 6; i++) {
    moduleScores[i] = 0;
  }
  
  // Reset user info
  userInfo.name = '';
  userInfo.lastName = '';
  userInfo.email = '';
  
  // Clear storage
  try {
    const storage = window.localStorage;
    storage.removeItem('moduleScores');
    storage.removeItem('userInfo');
    console.log('✓ localStorage cleared');
  } catch (e) {
    console.warn('⚠️ localStorage not accessible:', e.message);
  }
  
  // Clear session memory
  sessionData.moduleScores = null;
  sessionData.userInfo = null;
  
  // Clear input fields
  const nameField = document.getElementById('userName');
  const lastNameField = document.getElementById('userLastName');
  const emailField = document.getElementById('userEmail');
  
  if (nameField) nameField.value = '';
  if (lastNameField) lastNameField.value = '';
  if (emailField) emailField.value = '';
  
  console.log('✓ All data cleared');
  
  // Refresh dashboard
  showDashboard();
  
  // Show success notification
  showClearSuccessNotification();
}

// Show success notification after clearing
function showClearSuccessNotification() {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: var(--space-24);
    right: var(--space-24);
    background-color: var(--color-success);
    color: white;
    padding: var(--space-16) var(--space-24);
    border-radius: var(--radius-md);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    z-index: 2000;
    animation: slideIn 0.3s ease;
  `;
  
  notification.innerHTML = '✓ Все результаты успешно очищены';
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Show persistence warning (sandbox limitation)
function showPersistenceWarning() {
  // Check if localStorage is accessible
  let isLocalStorageAvailable = false;
  try {
    const storage = window.localStorage;
    storage.setItem('test', 'test');
    storage.removeItem('test');
    isLocalStorageAvailable = true;
  } catch (e) {
    isLocalStorageAvailable = false;
  }
  
  if (!isLocalStorageAvailable) {
    console.warn('⚠️ localStorage is blocked - data will NOT persist across page refreshes');
    
    // Show warning banner at top of dashboard
    const warningBanner = document.createElement('div');
    warningBanner.style.cssText = `
      background-color: rgba(var(--color-warning-rgb), 0.15);
      border: 2px solid var(--color-warning);
      border-radius: var(--radius-md);
      padding: var(--space-16);
      margin-bottom: var(--space-24);
      text-align: center;
    `;
    
    warningBanner.innerHTML = `
      <div style="font-size: var(--font-size-base); color: var(--color-text); line-height: 1.5;">
        <strong style="color: var(--color-warning);">⚠️ Внимание:</strong> 
        Результаты тестов сохраняются только в рамках текущей сессии. 
        При обновлении страницы данные будут сброшены из-за ограничений безопасности.
      </div>
    `;
    
    const dashboardView = document.getElementById('dashboardView');
    const header = dashboardView.querySelector('.header');
    header.insertAdjacentElement('afterend', warningBanner);
  }
}

// Initialize on load
initApp();