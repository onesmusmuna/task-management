**Typeorm Repository**
Default methods [here](https://typeorm.delightful.studio/classes/_repository_repository_.repository.html)
We can also add our own custom methods, which is the best way for better customization.

Query builder filtering based on title and description

```ts
.andWhere('(task.title LIKE :search OR task.description LIKE :search)',
{ search:  `%${search}%` }
```
