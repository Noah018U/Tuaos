; Filesystem/0.asm
; Author: Noah018
; Description: This file contains the code for the first file in the filesystem folder.

section .text
    global _start

_start:
    ; This file is intentionally left blank.
    ; It will be used as a placeholder for future files in the filesystem folder.

    ; Exit the program
    mov eax, 1
    xor ebx, ebx
    int 0x80
