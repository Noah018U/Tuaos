; This is the code for the third file in the filesystem folder

section .data
    file3 db "This is the contents of file 3.", 0

section .text
global file3_start
file3_start:
    mov eax, 4 ; system call for write
    mov ebx, 1 ; file descriptor for stdout
    mov ecx, file3 ; pointer to the string to write
    mov edx, 30 ; length of the string
    int 0x80 ; call kernel

    ; end of file
    mov eax, 1 ; system call for exit
    xor ebx, ebx ; return 0 for success
    int 0x80 ; call kernel
