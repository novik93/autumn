<template lang="pug">
  .root-wrapper-container
    .root-container
      header.header-container
        .header
          .container
            .header__info
              .user
                .user__pic
                  img(src="../images/content/user.jpg").user__pic-avatar
                .user__name 
                  span Владимир Астаханов
                  a.exit-btn(href="#") Выйти
                  
              .header__title Панель администрирования
            a.exit-btn(href="#") Выйти
      section.tabs-container
        .tabs-container
          .container
            ul.tabs
              li.tabs__item
                a(href="#").tabs__link
                  .tabs__title Обо мне
              li.tabs__item
                a(href="#").tabs__link
                  .tabs__title Отзывы 
              li.tabs__item
                a(href="#").tabs__link
                  .tabs__title Работы 
      
      
      main.content-container
        .about-page-container
          .container
            .about-page__title
              h1.page-title Обо мне
              button.about-page__add-new Добавить группу
            .about-page__content
              .container.container--mobile-wide
                ul.skill-list
                  li.skill-list__item
                    .skill-container
                      .skill-item
                        .skill-item-decoration
                          input(type="text" placeholder="Название новой группы").skill-input
                          .skill-input-elem
                            a(href="#").input-elem-pic
                              svg(fill="#15951c" viewBox="0 0 342.357 342.357" ).input-elem-svg
                                polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 ")
                            a(href="#").input-elem-pic
                               svg(fill="#BF2929" viewBox="0 0 1000 1000" ).input-elem-svg
                                path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
                        hr
                      .add-skill-wrapper
                        input(type="text" placeholder="новый навык").skill-input.skill-input-first
                        input(type="text" placeholder="%").skill-input.skill-input-second
                        button.about-page__add-new.about-page__add-new-big.about-page__add-new-grey
                  li.skill-list__item
                    .skill-container
                      .skill-item
                        .skill-item-decoration
                          .skill-input.skill-input-filled FrontEnd
                          .skill-input-elem
                            a(href="#").input-elem-pic
                              //- img(src="../images/content/tick.png")
                              svg(fill="#15951c" viewBox="0 0 342.357 342.357" ).input-elem-svg
                                polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 ")
                            a(href="#").input-elem-pic
                              //- img(src="../images/content/Cross.png")
                              svg(fill="#BF2929" viewBox="0 0 1000 1000" ).input-elem-svg
                                path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
                        hr
                        .add-skill
                          ul.skill-component
                            li.skill-component-name html
                              .skill-component-percent 30%
                              a(href="#").add-skill-decor
                                svg(viewBox="0 0 528.899 528.899" fill="#383bcf").input-elem-pic
                                  path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                                svg(viewBox="0 0 459 459").input-elem-pic
                                  path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                            li.skill-component-name css
                              .skill-component-percent 50%
                              a(href="#").add-skill-decor
                                svg(viewBox="0 0 528.899 528.899" fill="#383bcf").input-elem-pic
                                  path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                                svg(viewBox="0 0 459 459").input-elem-pic
                                  path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                            li.skill-component-name javascript
                              .skill-component-percent 60%
                              a(href="#").add-skill-decor
                                svg(viewBox="0 0 528.899 528.899" fill="#383bcf").input-elem-pic
                                  path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                                svg(viewBox="0 0 459 459").input-elem-pic
                                  path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                                
                              
                      .add-skill-wrapper
                        input(type="text" placeholder="новый навык").skill-input.skill-input-first
                        input(type="text" placeholder="%").skill-input.skill-input-second
                        button.about-page__add-new.about-page__add-new-big
        .works-section
          .container.works-container
            h1.page-title Добавление работы    
            .works-content
              form.works-left
                .works-download
                  .works-download-title
                    span  перетащите либо загрузите <br> изображение
                    button.download-btn загрузить
              form.works-right(@submit.prevent="login")
                label.works-input(data-title="Название")
                  input(
                    v-model="work.name" 
                    :errorText="validation.firstError('work.name')"
                    placeholder="Дизайн сайта"
                  ).works-input-name
                  .input__error(:class="{ active: isActive }") {{validation.firstError('work.name')}}
                label.works-input(data-title="Ссылка")
                  input(
                    v-model="work.link" 
                    :errorText="validation.firstError('work.link')"
                    placeholder="https://wwww.сайт.ru"
                  ).works-input-link
                  .input__error(:class="{ active: isActive }") {{validation.firstError('work.link')}}
                label.works-input(data-title="Описание")
                  textarea.works-input-desc(placeholder="занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты")
                label.works-input(data-title="Добавление тега")
                  input(
                    placeholder="HTML, Vue.js, Jquery"
                    v-model="work.teg" 
                    :errorText="validation.firstError('work.teg')"
                  ).works-input-add
                  .input__error(:class="{ active: isActive }") {{validation.firstError('work.teg')}}
                ul.works-input-tags
                  - var tags = ["html", "Vue.js", "Jquery"];
                  each item in tags 
                    li.works-input-tags-name
                      .tag #{item}
                      a(href="#").tag-close X

                .works-input-button
                  button.download-btn.download-btn-cansel отмена
                  button(
                    type="submite"
                  ).download-btn загрузить
            .works-add 
              button.add__newWork.works-add__container
                .add__newWork-circle
                .add__newWork-title Добавить работу 
              ul.works-add__list.works-add__container
                li.works-add__item
                  img(src="../images/content/work_1.jpg").works-add__photo
                  .works-add__content
                    h4.works-add__title Новая работа
                    .works-add__desc Описание работы
                      p
                    a(href="#").works-add__link www.google.com
                    .works-add__param
                      .param
                        button.rule
                          .rule-title Править
                          .param-icon
                            svg(viewBox="0 0 528.899 528.899" fill="#383bcf")
                                  path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z") 
                        button.delet
                          .delete-title Удалить 
                          .param-icon
                            svg(fill="#BF2929" viewBox="0 0 1000 1000" ).input-elem-svg
                                path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")    

        .reviews-section
          .container
            h1.page-title Блок "Отзывы"
          .reviews-container
            .container.card
              .card__title
                .card__title-text Текст
              form.card__content(@submit.prevent="login")
                .reviews__form   
                  form.reviews__form-content
                    .reviews__form-userpic
                      label.reviews__form-avatar-upload
                        input.reviews__form-file-input
                        .reviews__form-pic
                          .reviews__form-avatar-empty
                            svg(viewBox="0 0 482.9 482.9").reviews__form-avatar-user
                              path(d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z")
                              path(d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z")
                        .reviews__form-addphoto Добавить фото
                    .reviews__form-col
                      .reviews__form-row
                        .reviews__form-block
                          label.works-input(data-title="Имя автора ")
                            input(
                              placeholder="Игорек"
                              v-model="reviews.name" 
                              :errorText="validation.firstError('reviews.name')"
                            ).works-input-name
                            .input__error(:class="{ active: isActive }") {{validation.firstError('reviews.name')}}
                        .reviews__form-block
                          label.works-input(data-title="Титул автора")
                            input(
                              v-model="reviews.title" 
                              :errorText="validation.firstError('reviews.title')"
                              placeholder="Фартовый"
                            ).works-input-name
                            .input__error(:class="{ active: isActive }") {{validation.firstError('reviews.title')}}
                      .reviews__form-row
                        .reviews__form-block
                          label.works-input(data-title="Отзыв")
                            textarea.works-input-desc(placeholder="занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты")
                .edit-form__buttons
                  button.download-btn.download-btn-cansel отмена
                  button(type="submit").download-btn загрузить
          .reviews-add 
              button.add__newWork.works-add__container.reviews-add__container
                .add__newWork-circle
                .add__newWork-title Добавить отзыв
              .reviews-add__content.works-add__container
                .reviews-add__header
                  .user__pic
                    img(src="../images/content/Sibancev.png").user__pic-avatar
                  .reviews-add__header-name
                    h3.user__name Владимир Сибанцев
                    h4.user__title Преподаватель
                hr
                .reviews-add__desc
                  p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерахЭтот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерахЭтот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews-add__param
                  .param
                    button.rule
                      .rule-title Править
                      .param-icon
                        svg(viewBox="0 0 528.899 528.899" fill="#383bcf")
                              path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z") 
                    button.delet
                      .delete-title Удалить 
                      .param-icon
                        svg(fill="#BF2929" viewBox="0 0 1000 1000" ).input-elem-svg
                            path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
              
      section.login
        .login__welcome
          .login__content
            form.login__form(@submit.prevent="login")
              a(href="#").login__close &times;
              .login__title Авторизация
                .login__row(:class="{ active: isActive }")
                  span Логин
                  .login__row-title
                    svg(
                      :class="{ active: isActive }"
                      viewBox="0 0 482.9 482.9").login__row-icon-svg
                      path(d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z")
                      path(d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z")
                    input(
                      v-model="user.name" 
                      :errorText="validation.firstError('user.name')"
                      ).login__row-input 
                  .input__error(:class="{ active: isActive }")  {{validation.firstError('user.name')}}
                .login__row(:class="{ active: isActive }")
                  span Пароль
                  .login__row-title
                    svg(
                      :class="{ active: isActive }"
                      viewBox="0 0 512 512").login__row-icon-svg
                      path(d="M334.974,0c-95.419,0-173.049,77.63-173.049,173.049c0,21.213,3.769,41.827,11.211,61.403L7.672,399.928c-2.365,2.366-3.694,5.573-3.694,8.917v90.544c0,6.965,5.646,12.611,12.611,12.611h74.616c3.341,0,6.545-1.325,8.91-3.686l25.145-25.107c2.37-2.366,3.701-5.577,3.701-8.925v-30.876h30.837c6.965,0,12.611-5.646,12.611-12.611v-12.36h12.361c6.964,0,12.611-5.646,12.611-12.611v-27.136h27.136c3.344,0,6.551-1.329,8.917-3.694l40.121-40.121c19.579,7.449,40.196,11.223,61.417,11.223c95.419,0,173.049-77.63,173.049-173.049C508.022,77.63,430.393,0,334.974,0zM334.974,320.874c-20.642,0-40.606-4.169-59.339-12.393c-4.844-2.126-10.299-0.956-13.871,2.52c-0.039,0.037-0.077,0.067-0.115,0.106l-42.354,42.354h-34.523c-6.965,0-12.611,5.646-12.611,12.611v27.136H159.8c-6.964,0-12.611,5.646-12.611,12.611v12.36h-30.838c-6.964,0-12.611,5.646-12.611,12.611v38.257l-17.753,17.725H29.202v-17.821l154.141-154.14c4.433-4.433,4.433-11.619,0-16.051s-11.617-4.434-16.053,0L29.202,436.854V414.07l167.696-167.708c0.038-0.038,0.067-0.073,0.102-0.11c3.482-3.569,4.656-9.024,2.53-13.872c-8.216-18.732-12.38-38.695-12.38-59.33c0-81.512,66.315-147.827,147.827-147.827S482.802,91.537,482.802,173.05C482.8,254.56,416.484,320.874,334.974,320.874z")
                      path(d="M387.638,73.144c-26.047,0-47.237,21.19-47.237,47.237s21.19,47.237,47.237,47.237s47.237-21.19,47.237-47.237S413.686,73.144,387.638,73.144z M387.638,142.396c-12.139,0-22.015-9.876-22.015-22.015s9.876-22.015,22.015-22.015s22.015,9.876,22.015,22.015S399.777,142.396,387.638,142.396z")
                    input(
                      type="password"
                      v-model="user.password" 
                      :errorText="validation.firstError('user.password')"
                      ).login__row-input
                  .input__error(:class="{ active: isActive }") {{validation.firstError('user.password')}}
                .login__btn
                  button(
                    type="submit").login__send отправить



                    

                    
                      


</template>


<script>
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите ваш пароль");
    },
     "work.name": value => {
      return Validator.value(value).required("Введите имя сайта");
    },
     "work.link": value => {
      return Validator.value(value).required("Введите ссылку на сайт");
    },
     "work.teg": value => {
      return Validator.value(value).required("Добавьте тег");
    },
     "reviews.name": value => {
      return Validator.value(value).required("Введите имя автора");
    },
     "reviews.title": value => {
      return Validator.value(value).required("Добавьте титул");
    },
  },
  data() {
    return {
      disableSubmit: false,
      user: {
        name:"",
        password:""
      },
      disableSubmit: false,
      work: {
        name:"",
        link:"",
        teg:""
      },
      disableSubmit: false,
      reviews: {
        name:"",
        title:""
      },
      isActive: false,
    };
  },
  methods: {
    async login() {
      this.isActive = !this.isActive;
      if ((await this.$validate()) == false) return;
      this.disableSubmit = true;
    },
  },
  
};




</script>


<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");






.input__error {
  display: none;
  z-index: 100;
  background: red;
  color: white;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
  position: relative;
  
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: red;
    border-bottom-width: 7px;
    position: absolute;
    bottom: 100%;
    left: 8%;
    transform: translateX(-50%);
  }
}

.active {
  border-bottom: none !important;
  display: block;
  fill: red !important;
  span {
    color: red !important;
  }
}


input {
  width: 100%;
}

.root-wrapper-container {
  height: 100%;
}
.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;
  @include phones {
    padding: 20px 0;
  }
}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.maincontent {
  color: #414c63;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  /* background: url("~images/content/bg_1.jpg");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;; */
  
  background-color: #f7f9fe;
  flex: 1;
  padding-top: 60px;
  @include phones {
    padding-top: 30px;
  }
}
.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}
///////////////////head
.header {
  color: #fff;
}
.header__info {
  display: flex;
  align-items: center;
}
.header__title {
  color: rgba(#fff, 0.5);
  @include phones {
    display: none;
  }
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.user__name {
  font-size: 18px;
  font-weight: 600;
  .exit-btn {
    display: none;
    @include phones {
      display: block;
    }
  }
}
.user__pic {
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}
.exit-btn {
  opacity: 0.7;
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    text-decoration: none;
  }
  @include phones {
    display: none;
  }
}

//////tabs

tabs-container {
  background: #fff;
}
.tabs {
  display: flex;
  height: 77px;
  @include phones {
    height: 87px;
  }
}
.tabs__item {
  height: 100%;
  margin-right: 30px;
  @include phones {
    margin-right: 3px;
  }
  &:last-child {
    margin-right: 0;
  }
}
.tabs__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  @include phones {
    width: 100px;
  }
  &:before {
    content: "";
  }
  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}

//////////////skill about
.skill-container {
  padding: 20px;
  background-color: #fff;
  max-width: 525px;
  height: 390px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

  hr {
    margin-top: 20px;
  }
}

.about-page-container {
  height: 780px;

   @include phones {
    height: auto;
  }
}

.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.about-page__add-new {
  background: transparent;
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
.about-page__add-new-grey {
  &:before {
    background-color: #a0a5b1;
    background-image: none;

  }

   &:hover {
     &::before{
      background-image: linear-gradient(to right, #006aed, #3f35cb);
    }
   }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}

.skill-input {
  background: transparent;
  color: inherit;
  border: 0;
  width: 60%;
  border-bottom: 2px solid;
  outline: none;
  padding-bottom: 10px;
  font-weight: 600;
  opacity: 0.5;

}

.skill-input-filled {
  border-bottom: 0;
  opacity: 1;
  font-weight: 800;
}

.skill-item-decoration {
  display: flex;
}

.input-elem-pic {
  fill: #a0a5b1;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
}

.skill-input-elem {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.check-sign {
    position: absolute;
    background: red;
}

#check-part-1 {
    width: 50px;
    height: 20px;    
    transform:rotate(45deg);	
}

#check-part-2 {
    width: 100px;
    height: 20px;    
    transform: rotate(-45deg);
    left: 16px;
    top: -19px;
}

.skill-input-first {
  margin-right: 50px;
  width: 100%;
}

.skill-input-second {
  margin-right: 20px;
  width: 40%;
}

.add-skill-wrapper {
  display: flex;
  margin-left: 50px;
}


.about-page__add-new-big {
  &:before {
    flex-basis: auto;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }
}

.add-skill-decor {
  display: flex;
  margin-left: 20px;
}

.skill-component-name {
  display: flex;
  justify-content: space-between;
}

.skill-component-percent {
  margin-left: auto;
}

.skill-component-name {
   margin-top: 40px;
}

.works-container {
  
}

.works-content {
  padding: 20px;
  background-color: #fff;
  margin-top: 40px;
  display: flex;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }
}

.works-left {
  flex:  0 1 auto;
  height: 280px;
  width: 500px;
  border: dotted;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color:#dee4ed;

   @include phones {
    width:100%;
  }
}

.works-download {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.works-download-title {
  align-items: center;
  display: flex;
  flex-direction: column;

  & span {
    margin-bottom: 20px;
    font-weight: 800;
    opacity: 0.3;
  }
}

.download-btn {
  display: inline-block;
  width: 200px;
  height: 70px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  border-radius: 35px;
  position: relative;
  outline: none;
  font-size: 25px;
  font-weight: 700;
}

.download-btn-cansel {
  margin-right: 20px;
  background-image: none;
  color: #3f35cb;
  font-size: 18px;
  font-weight: 500;
}


.works-right {
  margin-left: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;

   @include tablets {
    margin-top: 30px;
    margin-left: 0;
    width: 70%;
  }

   @include phones {
    width:100%;
  }
}

.works-input {
  border-bottom: 1px solid;
  margin-bottom: 40px;


  &:nth-child(3){
    border-bottom: none;
  }

   &:nth-child(4) {
    margin-bottom: 0px;
  }

  &:before {
    content: attr(data-title);
    margin-bottom: 1.3125rem;
    display: block;
    font-weight: 500;
    opacity: .3;
  }

textarea {
  padding: 10px;
  width: 100%;
  height: 100px;
  }
}

.works-input-name,
.works-input-link,
.works-input-add {
  padding-bottom: 8px;
  font-weight: 700;
  opacity: 0.6;
  outline: none;
  background: transparent;
  color: inherit;
  border: 0;
}

.works-input-tags {
  display: flex;
  margin: 20px 0 40px 0;
}

.works-input-tags-name {
  margin-right: 15px;
  margin-bottom: 15px;
  position: relative;
  width: 86px; 
  height: 30px;
  background: #f3f5f9;
  border-radius: 100px;
  margin-right: 10px;
}



.tag {
  font-size: 15px;
  font-weight: 700;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.tag-close {
  font-size: 16px;
  font-weight: 700;
  opacity: 0.6;
  position: absolute;
  right: 10%;
  bottom: 15%;
}

.works-input-button {
  text-align: end;

  @include tablets {
   text-align: start;;
  }

  @include tablets {
   display: flex;
  }
}

.works-add {
  margin-top: 30px;
  padding: 20px;
  /* background-color: #fff; */
  display: flex;

   @include tablets {
    justify-content: center;
  }
  
  @include phones {
    flex-direction: column;
  }

}

.works-add__container {
  padding: 10px;
  background-color: white;
  flex-wrap: wrap;
  width: 340px;
  height: 550px;
  margin-right: 30px;

  &:last-child {
    margin-right: 30px;
  }
}

.add__newWork {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #006aed, #3f35cb);

  @include phones {
    margin-right: 0;
    height: 110px;
    width: 100%;
    flex-direction: initial;
    align-items: center;
    justify-content: flex-start;
  }
}

.add__newWork-circle {
  position: relative;
  width: 150px; 
  height: 150px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid white;

  &:before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 300;
    font-size: 50px;
    color:#fff;
  }

  @include phones {
      width: 50px;
      height: 50px;
      margin-left: 20px;
  }

}

.add__newWork-title {
  color: white;
  margin-top: 15px;
  font-size: 20px;
  font-weight: 600;

  @include phones {
    margin-top: 0;
    margin-left: 20px;
  }
}

.works-add__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.works-add__content {

  font-weight: 600;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start
}

.works-add__title {
  font-weight: 600;
  margin-top: 30px;
}

.works-add__list {
  @include phones {
    width: 100%;
    margin: 0;
  }
}

.param {
  display: flex;
  justify-content: space-between;
}

.rule,
.delet {
  outline: none;
  display: flex;
  align-items: center;
}

.param-icon {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
///////////////////////////////reviews
.card {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  &_plain {
    padding: 0;
  }
}
.card__title {
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}
.card__content {
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.container__reviews {
  background: #fff;
}
.reviews-container {
  height: 520px;

  @include tablets {
    height: auto;
  }

}

.reviews__form {
  margin-bottom: 30px;
}
.reviews__form-content {
  display: flex;
  @include tablets {
    padding-right: 0;
  }
  @include phones {
    flex-direction: column;
  }
}
.reviews__form-addphoto {
  text-align: center;
}
.reviews__form-row {
  display: flex;
  margin-bottom: 40px;
  @include tablets {
    flex-direction: column;
  }
&:last-child {
      margin-bottom: 0;
    }

}
.reviews__form-col {
  flex: 1;
}
.reviews__form-block {
  flex: 1;
  margin-right: 30px;
  @include tablets {
    margin-right: 0;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &:last-child {
    margin-right: 0;
  }

    textarea{
    border-bottom: none;
    padding: 10px;
  }

}
.reviews__form-addphoto {
  color: #383bcf;
  font-weight: 600;
}
.reviews__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}
.reviews__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  @include phones {
    margin-right: 0;
    margin-bottom: 30px;
  }
}
.reviews__form-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;
  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
  
  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}
.reviews__form-avatar-user{
    height: 115px;
    width: 85px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

.reviews__form-avatar-upload {
  position: relative;
  &.error {
    .reviews__avatar-error {
      display: block;
    }
  }
}
.reviews__avatar-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}
.reviews__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}
.edit-form__buttons {
  display: flex;
  justify-content: flex-end;
  @include tablets {
    padding: 0 !important;
  }
}
.edit-form__buttons-item {
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
}

.reviews-add {
  display: flex;
  margin-top: 30px;
  padding: 20px;

  @include tablets {
    justify-content: center;
  }

  @include phones {
    flex-direction: column;
  }
}

.reviews-add__container {
  height: 380px;

  @include phones {
    height: 110px;
  }
}


.reviews-add__content {
  height: 380px;
  display: flex;
  flex-direction: column;
hr {
  width: 100%;
}
@include phones {
    width: 100%;
  }

}

.reviews-add__header {
  display: flex;
}

.reviews-add__desc {
  flex: 1;

}

.user__photo {
  width: 40px;
  height: 40px;
}

.login__welcome {
  @include phones {
    height: 100%;
    width: 100%;
  }
}

.login {
  /* position: fixed; */
  position: relative;
  height: 1000px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../images/content/bg_1.jpg") center center / cover no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}

.login__close {
  right: 16px;
  top: -1px;
  position: absolute;
  font-size: 50px;
  font-weight: 600;
}


.login__title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}
.login__content {
  position: relative;
  @include phones {
    height: 100%;
    width: 100%;
  }
}
.login__row {
  border-bottom: 1px solid;
  text-align: start;
  margin-bottom: 35px;

  span {
    font-size: 18px;
    color: #ebedef;
    margin-left: 40px;
  }
}
.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}
.login__send {
  width: 100%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
.login__form {
  width: 563px;
  padding: 50px 77px 60px;
  background: #fff;
  @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.login__row-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.login__row-icon-svg {
  fill: #ebedef;
  width: 35px;
  height: 35px;
}

.login__row-input {
  font-size: 20px;
  outline: none;
  margin-left: 20px;
  border: none;
  background-color: transparent;
}
</style>