# Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Прев'ю робочого
застосунку

[![Превью](https://i.gyazo.com/76384ee7d41664406ee52acb77351f07.jpg)](https://gyazo.com/76384ee7d41664406ee52acb77351f07)

Створи компоненти `<SearchForm>`, `<ImageCard>`, `<Button>` і `<Modal>`. Для
створення сітки використовуй styled-components `<Grid>` та `<GridItem>`

> Тут самі файли [Grid](./src/components/Grid/Grid.styled.jsx)

## Інструкція Pexels API

Для HTTP-запитів використовуй публічний сервіс пошуку зображень
[ Pexels](https://www.pexels.com/api/documentation/). Зареєструйся та отримай
приватний ключ доступу.

Приклад HTTP-запиту.

```js
import axios from 'axios';

const API_KEY = '';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};
```

Pexels API підтримує пагінацію, за замовчуванням параметр `page` дорівнює `1`.
Нехай у відповіді надходить по 15 об'єктів, встановлено в параметрі `per_page`.
Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати
значення `page` до `1`.

У відповіді від API приходить масив об'єктів, в яких тобі цікаві лише наступні
властивості.

- `id` - унікальний ідентифікатор
- `avg_color` - колір фотографії,
- `alt` - опис фото,
- `src` - об'єкт з розмірами картинок, нам цікавий розмір `large`

## Опис компонента `<SearchForm>`

Компонент приймає один проп `onSubmit` - функцію для передачі значення інпута
під час сабміту форми. Він буде наступної структури.

```jsx
<SearchFormStyled>
  <FormBtn type="submit">
    <FiSearch size="16px" />
  </FormBtn>
  <InputSearch
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</SearchFormStyled>
```

## Опис компонента галереї `<Grid/>`

Список карток зображень. Створює компонент наступної структури.

```jsx
<Grid>
  {/*
    Набір <CardItem></CardItem> із зображеннями
    */}
</Grid>
```

## Опис компонента `<GridItem>`

Компонент елемента списку із зображенням. Створює компонент наступної структури.

```jsx
<GridItem>
  <CardItem>
    <img src="" alt="" />
  </CardItem>
</GridItem>
```

## Опис компонента `<Button>`

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція
зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише
тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка
не рендериться.

# TODO LIST

- Напиши застосунок зберігання todo-листів.
- Використовуй методи життєвого циклу.
- Під час додавання та видалення контакту контакти зберігаються у
  `localStorage`.
- Під час завантаження застосунку todo-листа, якщо такі є, зчитуються з
  локального сховища і записуються у `state`.

## Крок 1

Застосунок повинен складатися з форми і списку todo-листів. На поточному кроці
реалізуй додавання тудушки та відображення їх списку. Застосунок повинен
зберігати тудушки між різними сесіями (оновлення сторінки).

Використовуйте готову структуру форми з попередньго таска: компонент
`<SearchForm/>` приймає один проп `onSubmit` - функцію для передачі значення
інпута під час сабміту форми.

```jsx
<SearchFormStyled>
  <FormBtn type="submit">
    <FiSearch size="16px" />
  </FormBtn>
  <InputSearch
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</SearchFormStyled>
```

`state`, що зберігається в батьківському компоненті `<Todos/>`, обов'язково
повинен бути наступного вигляду.

```bash
state = {
  todos: [],
}
```

Кожна todo повинна бути об'єктом з властивостями `text` та `id`. Для генерації
ідентифікаторів використовуй будь-який відповідний пакет, наприклад
[nanoid](https://www.npmjs.com/package/nanoid). Після завершення цього кроку,
застосунок повинен виглядати приблизно так.

[![preview](https://i.gyazo.com/de0115918db7d989fbdc10f1744c11c3.png)](https://gyazo.com/de0115918db7d989fbdc10f1744c11c3)

### Опис компонента галереї `<Grid/>`

Список карток тудушок. Створює компонент наступної структури.

```jsx
<Grid>{/* Набір <GridItem ></CardItem> із тудушками */}</Grid>
```

### Опис компонента `<GridItem/>`

Компонент елемента тудушки. Створює компонент наступної структури.

```jsx
<GridItem>
  <Todo />
</GridItem>
```

### Опис компонента `<Todo/>`

Компонент тудушки. Створює компонент наступної структури.

```jsx
<TodoWrapper>
  <Text textAlign="center" marginBottom="20px">
    TODO #1
  </Text>
  <Text>Some description</Text>
  <DeleteButton type="button">
    <RiDeleteBinLine size={24} />
  </DeleteButton>
</TodoWrapper>
```

Кореневий компонент програми виглядатиме так.

```jsx
<SearchForm />
  <Grid>
    <GridItem>
      <Todo/>
    </GridItem>
  </Grid>
```

## Крок 2

Розшир функціонал застосунку, дозволивши користувачеві видаляти раніше збережені
тудушки.

[![preview](https://i.gyazo.com/8bf303fed0163b544d5c2314fe1df133.gif)](https://gyazo.com/8bf303fed0163b544d5c2314fe1df133)

## Крок 3

За бажанням додай функціонал редагування карточки

Для цього потрібно використати додаткову форму, в якій потрібно підставити текст
зі створеної тудушки та додати в неї дві кнопки - `Cancel` `Edit`

В `state` додай властивості:

- `isEditing` - буль, що сигнілізує чи можливо включити "режим редагування"

  > В залежності від значення ми будемо показувати або `<SearchForm/>`, або
  > `<EditForm/>`

- `currentTodo` - об'єкт, який буде в собі зберігати інформацію про тудушку яку
  треба відредагувати

```bash
state = {
  todos: [],
  isEditing: false,
  currentTodo: {},
}
```

### Опис компонента `<EditForm/>`

Компонент приймає декілька пропсів. Для зручності можна створити як
функціональний компонент:

- `onUpdate` - функцію для оновлення тудушки
- `onCancel` - функцію для відміни редагування
- `onChange` - функцію зчитання нового значення з інпута
- `currentTodo` - тудушка, яку в даний час ми редагуємо; потрібно для
  підстановки існуючого опису в інпут, записуємо в значення `defaultValue`

Компонент форми буде наступної структури.

```jsx
<SearchFormStyled>
  <BtnEdit type="button">
    <MdOutlineCancel size="16px" color="red" />
  </BtnEdit>

  <FormBtn type="submit">
    <RiSaveLine size="16px" color="green" />
  </FormBtn>

  <InputSearch
    placeholder="EDIT TODO"
    name="edit"
    required
    defaultValue={currentTodo.text}
    autoFocus
  />
</SearchFormStyled>
```

### Опис компонента `<Todo>`

В компонент тудушки додаємо кнопку для редагування. Створює компонент наступної
структури.

```jsx
<TodoWrapper>
  <Text textAlign="center" marginBottom="20px">
    TODO #1
  </Text>
  <Text>{text}</Text>
  <DeleteButton type="button">
    <RiDeleteBinLine size={24} />
  </DeleteButton>

  <EditButton type="button">
    <RiEdit2Line size={24} />
  </EditButton>
</TodoWrapper>
```

### Додай функціонал покроково:

- додай функцію, яка покаже форму редагування, наприклад `handleEdit`
- додай функцію, відмінить редагування та залишить все як є, наприклад
  `handleCancel`
- додай функцію, змініть `state` значення `currentTodo` та додасть туди
  оновлений текст, наприклад `handleInputEditChange(event)`
- додай функцію, оновить стейт всіх тудушoк значення `todos` та додасть туди
  оновлену тудушку, наприклад `handleInputEditChange(id,updatedTodo)`
- додай функцію, яка по події сабміт додасть в `state` та оновить список ,
  наприклад `handleEditFormUpdate(e)`

Прев'ю фінального результата роботи додатку

[![preview](https://i.gyazo.com/57595efde1dbe5b2bd7ab49895b5343a.gif)](https://gyazo.com/57595efde1dbe5b2bd7ab49895b5343a)
