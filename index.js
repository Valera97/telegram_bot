var TelegramBot = require('node-telegram-bot-api')
var TOKEN = '669622397:AAF9pk_GhRBmK_yny_4610L79-umsiygbOs'

console.log('bot has been startet')
// Включить опрос сервера
var bot = new TelegramBot(TOKEN, {polling: true});

var hi_keboard  = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['Расскажите про iHoney'],
            ['Какой есть мёд?'],
            ['Я хочу купить мёд.'],
        ]
    })
};
var b_ih_keboard  = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['Посмотреть на карте'],
            ['Посмотреть фото'],
            ['Вернуться на главную'],
        ]
    })
};
var map_keboard  = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['Посмотреть фото'],
            ['Вернуться'],
        ]
    })
};
var photo_keboard  = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['Посмотреть на карте'],
            ['Вернуться'],
        ]
    })
};
var med_keboard  = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['Перейти к заказу'],
            ['Вернуться назад'],
        ]
    })
};
var zak_med_keboard  = {
    reply_markup: JSON.stringify({
        keyboard: [

            ['Вернуться в меню'],
        ]
    })
};
var inline_keyboard =  {
    reply_markup: JSON.stringify({
    inline_keyboard: [
        [{ text: 'Да', callback_data: 'yes' }],
        [{ text: 'Нет я боюсь', callback_data: 'no' }],
        [{ text: 'Вернуться назад', callback_data: 'back' }],
    ]
})
};
var site_url= {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Перейти на сайт', url:'https://ihoney.com.ua/pricing/' }],
        ]
    })
};
bot.onText(/\/start/, function (msg, match) {
    bot.sendMessage(462012340,`Имя:${msg.from.first_name}, username:${msg.from.username} , начал чат`);
    bot.sendMessage(msg.chat.id, `Здраствуйте, ${msg.from.first_name}`);
    bot.sendMessage(msg.chat.id, "Выберите пожалуйста ниже - один из вариантов:", hi_keboard);
});
bot.on('message',msg =>{
   if (msg.text == 'Расскажите про iHoney')  {
       bot.sendMessage(msg.chat.id, `Пасека iHONEY находится в 
экологически чистом районе на севере Одесской области. 
Вдали от трасс и промзон 
недалеко от Сарванского леса`, b_ih_keboard);

   }
   if (msg.text == 'Какой есть мёд?')  {
       bot.sendMessage(msg.chat.id, `Сейчас в продаже два вида мёда:
- Разнотравье , урожай 2018 года
- Разнотравье , урожай 2017 года(густой, выдержанный)`, med_keboard);

   }
   if (msg.text == 'Я хочу купить мёд.') {
           bot.sendMessage(msg.chat.id, `Супер, сейчас я покажу какой 
 мёд у нас есть в данный 
 момент:`);
       bot.sendPhoto(msg.chat.id,'./med1.png',{
           caption: 'Разнотравье , урожай 2018 года -140грн/литр',
           reply_markup: JSON.stringify({
               inline_keyboard: [
                   [{ text: 'Перейти на сайт', url:'https://ihoney.com.ua/pricing/' }],
               ]
           })
       });
       bot.sendPhoto(msg.chat.id,'./med3.jpg',{
           caption: 'Майский мёд  - к сожалению уже закончился (быстро раскупают) -170грн/литр',
           reply_markup: JSON.stringify({
               inline_keyboard: [
                   [{ text: 'Перейти на сайт', url:'https://ihoney.com.ua/pricing/' }],
               ]
           })
       });
       bot.sendPhoto(msg.chat.id,'./med2.png',{
           caption: 'Разнотравье, урожай 2017 года (густой, выдержанный) -110грн/литр',
           reply_markup: JSON.stringify({
               inline_keyboard: [
                   [{ text: 'Перейти на сайт', url:'https://ihoney.com.ua/pricing/' }],
               ]
           })
       },zak_med_keboard);
       }
    if (msg.text == 'Посмотреть на карте')  {
        bot.sendLocation(msg.chat.id, 48.000231, 30.179417 ,map_keboard);
    }
    if (msg.text == 'Посмотреть фото')  {
       bot.sendPhoto(msg.chat.id,'./paseka.jpg',photo_keboard,{
           caption:''
       }).then(()=>{ bot.sendMessage(msg.chat.id,`А еще у меня есть звук пчёл за 
    роботой). Хотите послушать?`,inline_keyboard);})


    }
    if (msg.text == 'Вернуться на главную')  {
        bot.sendMessage(msg.chat.id, "Выберите пожалуйста ниже - один из вариантов:", hi_keboard);
    }
    if (msg.text == 'Вернуться')  {
        bot.sendMessage(msg.chat.id, `Пасека iHONEY находится в 
экологически чистом районе на севере Одесской области. 
Вдали от трасс и промзон 
недалеко от Сарванского леса`, b_ih_keboard);
    }
    if (msg.text == 'Вернуться назад')  {
        bot.sendMessage(msg.chat.id, "Выберите пожалуйста ниже - один из вариантов:", hi_keboard);
    }
    if (msg.text == 'Перейти к заказу')  {
        bot.sendMessage(msg.chat.id, `Супер, сейчас я покажу какой 
 мёд у нас есть в данный 
 момент:`);
        bot.sendPhoto(msg.chat.id,'./med1.png',{
            caption: 'Разнотравье , урожай 2018 года -140грн/литр',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Перейти на сайт', url:'https://ihoney.com.ua/pricing/' }],
                ]
            })
        });
        bot.sendPhoto(msg.chat.id,'./med3.jpg',{
            caption: 'Майский мёд  - к сожалению уже закончился (быстро раскупают) -170грн/литр',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Перейти на сайт', url:'https://ihoney.com.ua/pricing/' }],
                ]
            })
        });
        bot.sendPhoto(msg.chat.id,'./med2.png',{
            caption: 'Разнотравье, урожай 2017 года (густой, выдержанный) -110грн/литр',
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Перейти на сайт', url:'https://ihoney.com.ua/pricing/' }],
                ]
            })
        },zak_med_keboard);
    }
    if (msg.text == 'Вернуться в меню')  {
        bot.sendMessage(msg.chat.id, "Выберите пожалуйста ниже - один из вариантов:", hi_keboard);
    }

});
bot.on('callback_query',(callbackQuery) => {
    const msg = callbackQuery.message;
    switch (callbackQuery.data) {
        case 'yes':
            bot.sendMessage(msg.chat.id, `Это пчёлы записали и прислали 
мне в Facebook.
Круто, правда? )`,zak_med_keboard);
            bot.sendAudio(msg.chat.id, './bees.mp3')
            break
        case 'no':
            bot.sendMessage(msg.chat.id, `Ничего страшного,
я никому не скажу`,zak_med_keboard);
            break
        case 'back':
            bot.sendMessage(msg.chat.id, "Выберите пожалуйста ниже - один из вариантов:", hi_keboard);
            break
    }
});
