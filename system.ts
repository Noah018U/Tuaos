// system.ts

// Import necessary modules
import { BIOS } from './bios.json';
import { CONFIG } from './config.json';
import { NET } from './net.json';
import { FileSystem } from './filesystem';
import { BootLoader } from './bootloader';
import { CD } from './drivers/cd';
import { DVD } from './drivers/dvd';
import { Floppy } from './drivers/floppy';
import { ConsoleTerminal } from './drivers/console_terminal';
import { IOPorts } from './drivers/io_ports';
import { USBPorts } from './drivers/usb_ports';
import { Storage } from './drivers/storage';
import { RAM } from './drivers/ram';
import { CPU } from './drivers/cpu';
import { Display } from './drivers/display';
import { Mouse } from './drivers/mouse';
import { Keyboard } from './drivers/keyboard';
import { TypingCorrection } from './typing_correction';
import { Touchscreen } from './drivers/touchscreen';
import { Compression } from './compression';
import { Decompression } from './decompression';
import { GUI } from './uis.dll';
import { AIChatbot } from './aichat';
import { Calculator } from './calculator';
import { Localhost } from './localhost';
import { Encryption } from './encryption';
import { Decryption } from './decryption';
import { CCompiler } from './compile/c_compiler';
import { CPPCompiler } from './compile/cpp_compiler';
import { CSCompiler } from './compile/cs_compiler';
import { Shell } from './shell';
import { Taskbar } from './taskbar';
import { Desktop } from './desktop';

// Define system class
class System {
  // Properties
  private version: string = '1.33.92X';
  private creator: string = 'Noah018';
  private users: string[] = ['Default'];
  private currentUser: string = 'Default';
  private fileSystem: FileSystem = new FileSystem();
  private bootLoader: BootLoader = new BootLoader();
  private cd: CD = new CD();
  private dvd: DVD = new DVD();
  private floppy: Floppy = new Floppy();
  private consoleTerminal: ConsoleTerminal = new ConsoleTerminal();
  private ioPorts: IOPorts = new IOPorts();
  private usbPorts: USBPorts = new USBPorts();
  private storage: Storage = new Storage();
  private ram: RAM = new RAM();
  private cpu: CPU = new CPU();
  private display: Display = new Display();
  private mouse: Mouse = new Mouse();
  private keyboard: Keyboard = new Keyboard();
  private typingCorrection: TypingCorrection = new TypingCorrection();
  private touchscreen: Touchscreen = new Touchscreen();
  private compression: Compression = new Compression();
  private decompression: Decompression = new Decompression();
  private gui: GUI = new GUI();
  private aiChatbot: AIChatbot = new AIChatbot();
  private calculator: Calculator = new Calculator();
  private localhost: Localhost = new Localhost();
  private encryption: Encryption = new Encryption();
  private decryption: Decryption = new Decryption();
  private cCompiler: CCompiler = new CCompiler();
  private cppCompiler: CPPCompiler = new CPPCompiler();
  private csCompiler: CSCompiler = new CSCompiler();
  private shell: Shell = new Shell();
  private taskbar: Taskbar = new Taskbar();
  private desktop: Desktop = new Desktop();

  // Methods
  public getVersion(): string {
    return this.version;
  }

  public getCreator(): string {
    return this.creator;
  }

  public getUsers(): string[] {
    return this.users;
  }

  public getCurrentUser(): string {
    return this.currentUser;
  }

  public setCurrentUser(user: string): void {
    this.currentUser = user;
  }

  public getFileSystem(): FileSystem {
    return this.fileSystem;
  }

  public getBootLoader(): BootLoader {
    return this.bootLoader;
  }

  public getCD(): CD {
    return this.cd;
  }

  public getDVD(): DVD {
    return this.dvd;
  }

  public getFloppy(): Floppy {
    return this.floppy;
  }

  public getConsoleTerminal(): ConsoleTerminal {
    return this.consoleTerminal;
  }

  public getIOPorts(): IOPorts {
    return this.ioPorts;
  }

  public getUSBPorts(): USBPorts {
    return this.usbPorts;
  }

  public getStorage(): Storage {
    return this.storage;
  }

  public getRAM(): RAM {
    return this.ram;
  }

  public getCPU(): CPU {
    return this.cpu;
  }

  public getDisplay(): Display {
    return this.display;
  }

  public getMouse(): Mouse {
    return this.mouse;
  }

  public getKeyboard(): Keyboard {
    return this.keyboard;
  }

  public getTypingCorrection(): TypingCorrection {
    return this.typingCorrection;
  }

  public getTouchscreen(): Touchscreen {
    return this.touchscreen;
  }

  public getCompression(): Compression {
    return this.compression;
  }

  public getDecompression(): Decompression {
    return this.decompression;
  }

  public getGUI(): GUI {
    return this.gui;
  }

  public getAIChatbot(): AIChatbot {
    return this.aiChatbot;
  }

  public getCalculator(): Calculator {
    return this.calculator;
  }

  public getLocalhost(): Localhost {
    return this.localhost;
  }

  public getEncryption(): Encryption {
    return this.encryption;
  }

  public getDecryption(): Decryption {
    return this.decryption;
  }

  public getCCompiler(): CCompiler {
    return this.cCompiler;
  }

  public getCPPCompiler(): CPPCompiler {
    return this.cppCompiler;
  }

  public getCSCompiler(): CSCompiler {
    return this.csCompiler;
  }

  public getShell(): Shell {
    return this.shell;
  }

  public getTaskbar(): Taskbar {
    return this.taskbar;
  }

  public getDesktop(): Desktop {
    return this.desktop;
  }
}

// Export system class
export { System };
