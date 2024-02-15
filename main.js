$(document).ready(() => {

    const mainStatistics = [
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>`,
            name: '@nathanf',
            num: '1987',
            title: 'FOLLOWERS',
            outcome: '12 Today',
            color: 'bg-[#3b82f6]'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                < path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg > `,
            name: '@nathanf',
            num: '1044',
            title: 'FOLLOWERS',
            outcome: '99 Today',
            color: 'bg-[#0ea5e9]'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
            </svg>`,
            name: '@realnathanf',
            num: '11K',
            title: 'FOLLOWERS',
            outcome: '1099 Today',
            color: 'bg-gradient-to-r from-orange-400 to-purple-700'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
            </svg>`,
            name: 'Nathan. F',
            num: '8239',
            title: 'SUBSCRIBERS',
            outcome: '144 Today',
            color: 'bg-[#dc2626]'
        }
    ];

    $.each(mainStatistics, (index, item) => {
        let card = `
            <div class="card-item theme-item flex flex-col items-center bg-slate-800 w-full p-5 rounded-md border-t-4 border-slate-400">
                <div class="flex items-center gap-2 text-sm text-slate-400 mb-5">
                    <div class="${item.color} grid place-items-center w-[30px] h-[30px] rounded-sm">
                        ${item.img}
                    </div>
                    <p>${item.name}</p>
                </div>

                <h3 class="text-5xl font-bold mb-2">${item.num}</h3>
                <p class="text-slate-400 text-sm mb-3">${item.title}</p>

                <div class="text-emerald-600 text-sm flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-up-filled" width="16" height="16"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
                            stroke-width="0" fill="currentColor" />
                    </svg>
                    <p>${item.outcome}</p>
                </div>
            </div>
        `;

        $('.top-dash').append(card);
    });

    const subStatictics = [
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3b82f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>`,
            title: 'Page views',
            num: '87',
            percent: 3,
            statColor: '#22c55e'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3b82f6" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>`,
            title: 'Likes',
            num: '52',
            percent: 2,
            statColor: '#ef4444'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="orangered" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
            </svg>`,
            title: 'Likes',
            num: '5462',
            percent: 2257,
            statColor: '#22c55e'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="orangered" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
            </svg>`,
            title: 'Profile views',
            num: '52K',
            percent: 1375,
            statColor: '#22c55e'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0ea5e9" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>`,
            title: 'Retweets',
            num: '117',
            percent: 303,
            statColor: '#22c55e'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0ea5e9" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>`,
            title: 'Likes',
            num: '507',
            percent: 553,
            statColor: '#22c55e'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
            </svg>`,
            title: 'Likes',
            num: '107',
            percent: 19,
            statColor: '#ef4444'
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
            </svg>`,
            title: 'Total views',
            num: '1407',
            percent: 12,
            statColor: '#ef4444',
        }
    ];

    $.each(subStatictics, (index, item) => {

        const up = () => {
            if (item.num >= 100) {
                return `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-up-filled ml-auto" width="16"
            height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M11.375 6.22l-5 4a1 1 0 0 0 -.375 .78v6l.006 .112a1 1 0 0 0 1.619 .669l4.375 -3.501l4.375 3.5a1 1 0 0 0 1.625 -.78v-6a1 1 0 0 0 -.375 -.78l-5 -4a1 1 0 0 0 -1.25 0z"
                stroke-width="0" fill="${item.statColor}" />
            </svg>`;
            } else {
                return `<svg xmlns="http://www.w3.org/2000/svg" class="ml-auto" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" stroke-width="0" fill="${item.statColor}" />
            </svg>`;
            }
        }

        let card = `
    <div class="card-item theme-item bg-slate-800 w-full p-4 text-sm rounded-md">
            <div class="flex items-center justify-between mb-5">
                <h3>${item.title}</h3>

                ${item.img}
            </div>
            <div class="flex items-center">
                <p class="text-2xl font-bold">${item.num}</p>
                    ${up()}
                <p class="text-[${item.statColor}] font-semibold">${item.percent}%</p>
            </div>
        </div>
`;

        $('.bottom-dash').append(card);
    });




    // Get all elements with the class 'card-item'
    var cardItems = document.querySelectorAll('.card-item');

    // Set initial scale to 0 for each element
    cardItems.forEach(function (cardItem) {
        cardItem.style.transform = 'scale(0)';
    });

    // After 300 milliseconds, animate the scale of each element to 1
    setTimeout(function () {
        cardItems.forEach(function (cardItem) {
            cardItem.style.transition = 'transform 600ms ease'; // Add transition for smooth animation
            cardItem.style.transform = 'scale(1)';
        });
    }, 400);


    // theme mode button
    $('#toggle-theme').click((e) => {
        if ($(e.target).prop('checked')) {
            $('.theme-item').addClass('light-card');
            $('#check-ball').addClass('left-6');
            $('#check-ball').addClass('bg-white');
            $('.main-title').addClass('text-slate-900');
            $('body').addClass('bg-white');
        } else {
            $('.theme-item').removeClass('light-card');
            $('#check-ball').removeClass('left-6');
            $('#check-ball').removeClass('bg-white');
            $('body').removeClass('bg-white');
            $('.main-title').removeClass('text-slate-900');
        }
    });
    
});
