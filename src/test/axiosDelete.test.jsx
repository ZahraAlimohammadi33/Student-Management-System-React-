// /* global describe, it, expect */
// import { render, screen, fireEvent, waitFor } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import StudentItem from './StudentItem'
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'

// describe('حذف دانش‌آموز با Axios', () => {
//   it('باید پس از کلیک روی حذف، درخواست DELETE ارسال کند', async () => {
//     const mock = new MockAdapter(axios)
//     const mockDelete = vi.fn()

//     // ماک کردن پاسخ DELETE
//     mock.onDelete('https://mockapi.io/students/1').reply(200)

//     render(<StudentItem id="1" name="علی" onDelete={mockDelete} />)

//     const deleteButton = screen.getByText('حذف')
//     fireEvent.click(deleteButton)

//     await waitFor(() => {
//       expect(mock.history.delete.length).toBe(1) // بررسی اینکه واقعاً یک درخواست DELETE ارسال شده
//       expect(mockDelete).toHaveBeenCalledWith('1') // بررسی اینکه تابع onDelete اجرا شده با id صحیح
//     })
//   })
// })


