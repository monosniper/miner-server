export function KeyGenerate() {
    const passAt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const passArray = Array.from({length: 29})

    return passArray.map(function (_, index) {
	return index % 6 === 5 ? '-' : passAt.charAt(Math.random() * passAt.length).charAt('-')
    }).join('')
}