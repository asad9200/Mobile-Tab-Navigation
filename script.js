const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.btn')

// Images from internet
const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=800',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=400',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400'
]

// Show first image by default
screen.innerHTML = `<img src="${images[0]}" class="img">`

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        screen.innerHTML = `<img src="${images[index]}" class="img">`
    })
})