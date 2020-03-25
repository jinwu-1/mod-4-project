# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Apple", avatar: "https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg", username: "asdf", password: "asdf")
user2 = User.create(name: "Banana", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjmUxhNCDYQyGrdoxv5OVrSFLtjf6x0XXkXuAqA6m-Fc-rBxW5", username: "qwerty", password: "asdf")
user3 = User.create(name: "Cherry", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJkJ_ux9qxCYf4nbPO9zoZj8uJrffuEfBM-to_5K_mG3A407Fo",username: "abcde", password: "asdf")

post1 = Post.create(img_url: "https://kentcdodds.com/static/e2bb17df72c0b6da20b99af0512f9366/3e561/banner.jpg", description: "Mehhh", likes: 245, user_id: user1.id)
post2 = Post.create(img_url: "https://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Nice-Whatsapp-Dp-Profile-Images-101-300x300.jpg", description: "Nice",likes: 342, user_id: user2.id)

Comment.create(text: "wowowow", user_id: user2.id, post_id: post1.id)
Comment.create(text: "nicenice", user_id: user3.id, post_id: post1.id)
Comment.create(text: "omggggg", user_id: user1.id, post_id: post2.id)
Comment.create(text: "woww big fan!", user_id: user3.id, post_id: post2.id)