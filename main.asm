; main.asm for Tuaos OS

; Include necessary files
%include "boot.asm"
%include "reg.asm"

section .text
    ; Entry point for the OS
    global _start
_start:
    ; Initialize the system
    call init_system

    ; Load the BIOS settings
    call load_bios_settings

    ; Load the configuration files
    call load_config_files

    ; Initialize the network
    call init_network

    ; Initialize virtualization support
    call init_virtualization

    ; Initialize the video player
    call init_video_player

    ; Initialize the music player
    call init_music_player

    ; Initialize the image viewer
    call init_image_viewer

    ; Initialize the GUI and UI
    call init_gui_ui

    ; Initialize the AI chatbot
    call init_ai_chatbot

    ; Initialize the calculator
    call init_calculator

    ; Initialize the localhost website
    call init_localhost_website

    ; Initialize the shell
    call init_shell

    ; Start the OS
    call start_os

section .data
    ; Define data here
