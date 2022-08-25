const express = require('express');
const exphbs = require('express-handlebars').engine;
const app = express();
const port = process.env.PORT || '8000';

const mainAuthorLink = 'ruslanbagautdinov'; /* ЗАТЫЧКА, РЕАЛИЗОВАТЬ НУЖНО ИНАЧЕ */

app.engine(
    'hbs',
    exphbs({
        defaultLayout: 'main_layout',
        extname: '.hbs',
        helpers: {
            getMapValue(object) {
                return object[1];
            },
            getMapKey(object) {
                return object[0];
            },
            setTagLength(string = '') {
                if (string.length < 15) {
                    return string;
                }
                return string.substring(0, 12) + '...';
            },
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        //Datas
        meta: {
            title: 'Статьи про IT | ITshka',
            desc: 'Главная страница it-портала ITshka, с лентой статей и возможностью поиска',
            kw: 'Стать, IT, программирование',
        },
        tf: {
            tags: [
                ['tag-java-script', 'JavaScript'],
                ['tag-node-js', 'NodeJS'],
                ['tag-react-js', 'React'],
                ['tag-angular-js', 'Angular'],
                ['tag-vue-js', 'Vue'],
                ['tag-react-native-js', 'React Native'],
                ['tag-php', 'PHP'],
                ['tag-lareval-php', 'Laravel'],
                ['tag-python', 'Python'],
                ['tag-django-py', 'Django'],
                ['tag-java', 'Java'],
                ['tag-cpp', 'C++'],
                ['tag-csharp', 'C#'],
                ['tag-ruby', 'Ruby'],
                ['tag-ruby-on-rails', 'Ruby-on-Rails'],
                ['tag-swift', 'Swift'],
                ['tag-kotlin', 'Kotlin'],
                ['tag-data-structures', 'Data Structures'],
                ['tag-machine-learning', 'Machine Learning'],
                ['tag-deep-learning', 'Deep Learning'],
            ],
            filtersTheme: [
                ['filt-programming', 'Программирование'],
                ['filt-frontend', 'Фронтенд'],
                ['filt-backend', 'Бэкенд'],
                ['filt-html-coding', 'Вёрстка'],
                ['filt-web-design', 'Веб-дизнайн'],
                ['filt-data-science', 'Data Science'],
                ['filt-patterns', 'Паттерны'],
                ['filt-dev-ops', 'DevOps'],
                ['filt-soft-skills', 'Soft skills'],
            ],
            filtersDiffult: [
                ['filt-dif-junior', 'Junior'],
                ['filt-dif-middle', 'Middle'],
                ['filt-dif-senior', 'Senior'],
            ],
        },
        articles: [
            {
                name: 'HTML-шаблонизаторы ещё нужны?',
                snippet:
                    'Разобрал по полочкам актуальность использования HTML-шаблонизаторов в 2022 году на фоне таких фреймворков как React и Angular.',
                date: '17.08.2022',
                readingTime: String(5),
                author: {
                    firstName: 'Руслан',
                    lastName: 'Багаутдинов',
                    href: mainAuthorLink,
                },
                id: '4',
                href: '4',
            },
            {
                name: 'React VS Vue VS Angular. Выбираем фреймворк для фронтендера в 2022',
                snippet:
                    'В этой статье мы собрали информацию по трём главным фреймворкам для фронтендов, привели их плюсы и минусы, сравнили между собой, и разобрали сферы применения.',
                date: '16.08.2022',
                readingTime: String(12),
                author: {
                    firstName: 'Руслан',
                    lastName: 'Багаутдинов',
                    href: mainAuthorLink,
                },
                id: '3',
                href: '3',
            },
            {
                name: 'Node.js отличный выбор для качественного бэкенда.',
                snippet: 'Сегодня рассмотриваем Node.js и сравниваем с другими бэкенд-языками. Никакой субъективности только сухая статистика',
                date: '15.08.2022',
                readingTime: String(7),
                author: {
                    firstName: 'Руслан',
                    lastName: 'Багаутдинов',
                    href: mainAuthorLink,
                },
                id: '2',
                href: '2',
            },
            {
                name: 'Введение в ExpressJS',
                snippet:
                    'Это первая часть краткого курса, в конце которого Вы на базовом уровне освите Express и сможете начать разрабатывать серверную часть на Node.js',
                date: '15.08.2022',
                readingTime: String(17),
                author: {
                    firstName: 'Руслан',
                    lastName: 'Багаутдинов',
                    href: mainAuthorLink,
                },
                id: '1',
                href: '1',
            },
            {
                name: 'Node.js отличный выбор для качественного бэкенда.',
                snippet: 'Сегодня рассмотриваем Node.js и сравниваем с другими бэкенд-языками. Никакой субъективности только сухая статистика',
                date: '15.08.2022',
                readingTime: String(7),
                author: {
                    firstName: 'Руслан',
                    lastName: 'Багаутдинов',
                    href: mainAuthorLink,
                },
                id: '1',
                href: '1',
            },
        ],
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
});
