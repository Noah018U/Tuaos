; CRLFFinder.asm - finds the type of line endings used in a file

section .text
    global CRLFFinder

CRLFFinder:
    ; input:
    ;   esi - pointer to the start of the file
    ;   ecx - length of the file in bytes
    ; output:
    ;   eax - 0 if file uses LF line endings
    ;         1 if file uses CRLF line endings
    ;         2 if file uses CR line endings
    ;         3 if file is empty or contains only null bytes
    ;         4 if file contains no line endings
    ;         5 if file contains mixed line endings
    ;         6 if file contains only CR or LF line endings
    ;         7 if file contains only CR or CRLF line endings
    ;         8 if file contains only LF or CRLF line endings

    push ebx
    push edx
    push ebp
    push esi

    mov ebx, esi
    mov edx, ecx
    mov ebp, 0 ; counter for number of line endings found
    mov eax, 0 ; default return value

    ; check for empty file or file containing only null bytes
    xor ecx, ecx
    xor eax, eax
    cld
    repne scasb
    jecxz .empty_file
    mov eax, 0

    ; loop through file and count line endings
    mov esi, ebx
    mov ecx, edx
    cld
    mov ebp, 0 ; counter for number of line endings found
    mov eax, 0 ; default return value
    xor edx, edx ; edx will hold the type of line ending found
    mov bl, 0 ; bl will hold the previous byte
.loop:
    lodsb
    cmp al, 0Ah ; LF
    je .lf_found
    cmp al, 0Dh ; CR
    je .cr_found
    jmp .continue
.lf_found:
    inc ebp
    mov edx, 1 ; LF found
    jmp .continue
.cr_found:
    inc ebp
    cmp byte [esi], 0Ah ; check for CRLF
    je .crlf_found
    mov edx, 2 ; CR found
    jmp .continue
.crlf_found:
    inc ebp
    mov edx, 3 ; CRLF found
    inc esi ; skip LF
    jmp .continue
.continue:
    cmp esi, ebx + edx ; check if at end of file
    jb .loop

    ; determine return value based on number and type of line endings found
    cmp ebp, 0
    je .no_line_endings
    cmp edx, 1 ; LF
    je .lf_only
    cmp edx, 2 ; CR
    je .cr_only
    cmp edx, 3 ; CRLF
    je .crlf_only
    cmp edx, 5 ; mixed
    je .mixed
    cmp edx, 6 ; CR or LF only
    je .cr_lf_only
    cmp edx, 7 ; CR or CRLF only
    je .cr_crlf_only
    cmp edx, 8 ; LF or CRLF only
    je .lf_crlf_only
    jmp .unknown

.empty_file:
    mov eax, 3 ; empty file or file containing only null bytes
    jmp .done
.no_line_endings:
    mov eax, 4 ; file contains no line endings
    jmp .done
.lf_only:
    mov eax, 0 ; file contains only LF line endings
    jmp .done
.cr_only:
    mov eax, 2 ; file contains only CR line endings
    jmp .done
.crlf_only:
    mov eax, 1 ; file contains only CRLF line endings
    jmp .done
.mixed:
    mov eax, 5 ; file contains mixed line endings
    jmp .done
.cr_lf_only:
    mov eax, 6 ; file contains only CR or LF line endings
    jmp .done
.cr_crlf_only:
    mov eax, 7 ; file contains only CR or CRLF line endings
    jmp .done
.lf_crlf_only:
    mov eax, 8 ; file contains only LF or CRLF line endings
    jmp .done
.unknown:
    mov eax, 9 ; unknown line ending type
    jmp .done

.done:
    pop esi
    pop ebp
    pop edx
    pop ebx
    ret
