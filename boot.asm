; boot.asm - bootloader for Tuaos OS

bits 16

start:
    ; Set up the stack
    mov ax, 0x07C0
    add ax, 288
    mov ss, ax
    mov sp, 4096

    ; Load the boot sector into memory
    mov ax, 0x07C0
    mov ds, ax
    mov si, msg_loading
    call print_string
    mov bx, 0x0000
    mov es, bx
    mov bx, 0x0000
    mov ah, 0x02
    mov al, 0x01
    mov ch, 0x00
    mov cl, 0x02
    mov dh, 0x00
    int 0x13
    jc load_error

    ; Jump to the loaded boot sector
    jmp 0x0000:0x7E00

load_error:
    mov si, msg_load_error
    call print_string
    jmp $

; Print a null-terminated string to the screen
print_string:
    pusha
    mov ah, 0x0E
.repeat:
    lodsb
    cmp al, 0
    je .done
    int 0x10
    jmp .repeat
.done:
    popa
    ret

msg_loading db "Loading Tuaos OS...", 0
msg_load_error db "Error loading boot sector.", 0

times 510-($-$$) db 0
dw 0xAA55
