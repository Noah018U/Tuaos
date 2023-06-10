; This is a sample code for filesystem/1.asm
; It prints "Hello, world" to the console.

section .data
    hello db "Hello, world", 0

section .text
    global _start

_start:
    ; write hello to stdout
    mov eax, 4
    mov ebx, 1
    mov ecx, hello
    mov edx, 13
    int 0x80

    ; exit program
    mov eax, 1
    xor ebx, ebx
    int 0x80

; End of code.
