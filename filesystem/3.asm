; This is the code for filesystem/3.asm
; It is part of the Tuaos operating system project

section .text
    global _start

_start:
    ; TODO: Implement file system driver code here
    ; This code should support CRLF and LF file endings
    ; It should also be able to detect the file ending type
    ; and handle it accordingly
    ; The driver should be able to read and write to files
    ; and handle errors gracefully

    ; For now, we will just exit the program
    mov eax, 1
    xor ebx, ebx
    int 0x80
